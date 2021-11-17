import { types } from "../types/types";


export const cargarUsuarios = (usuarios) =>({
  type:types.usuariosCargados,
  payload:usuarios
});


export const setChatActivo = (uid) =>({
   type:types.chatActivo,
   payload:uid
});


export const nuevoMensaje = (mensaje) =>({
  type:types.nuevoMensaje,
  payload:mensaje,
});

export const cargarMensajes = (mensajes) =>({
   type:types.cargarChat,
   payload:mensajes
})

export const limpiarEstado = () =>({
   type:types.limpiarEstado
})