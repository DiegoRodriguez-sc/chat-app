import { types } from "../types/types";

const initialState = {
   logged:false,
   checking:true,
}

export const authReducer = (state = initialState, action) => {

 switch (action.type) {

   case types.authLogin:
      return{
         ...state,
         ...action.payload,
         logged:true,
         checking:false,
      }
   case types.finishCheck:
      return{
         ...state,
         checking:false,
      }
   case types.authLogout:
      return{
         logged:false,
         checking:false
      }
  default:
   return state;
 }



}