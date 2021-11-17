import { types } from "../types/types";


const initialState = {
   uid:"",
   chatActivo:null,
   usuarios:[],
   mensajes:[],
}

export const chatReducer = (state = initialState, action) => {

  switch (action.type) {
  
   case types.usuariosCargados:
     return{
       ...state,
       usuarios:[...action.payload]
     }
   case types.chatActivo:
     if(state.chatActivo === action.payload) return state;
     return{
        ...state,
        chatActivo:action.payload
     }
   case types.nuevoMensaje:
     if(state.chatActivo === action.payload.de || state.chatActivo === action.payload.para){
       return{
         ...state,
         mensajes:[...state.mensajes, action.payload]
       }
     }else{
       return state;
     }
   case types.cargarChat:
     return{
       ...state,
       mensajes:[...action.payload]
     }
   case types.limpiarEstado:
     return{
      uid:"",
      chatActivo:null,
      usuarios:[],
      mensajes:[],
     }
   default:
    return state;
  }
}