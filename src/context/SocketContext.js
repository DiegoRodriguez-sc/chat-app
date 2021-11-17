import React, { useEffect } from 'react';
import { createContext } from 'react';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { cargarUsuarios, nuevoMensaje } from '../actions/chat';
import { scrollToBottomAnimated } from '../helpers/scroll';

import { useSocket } from '../hooks/useSocket';



export const SocketContext = createContext();


export const SocketProvider = ({ children }) => {

    const dispatch = useDispatch();

    const { socket, online, conectarSocket, desconectarSocket } = useSocket('http://localhost:8080');

    const {logged} = useSelector(state => state.auth);
    
    useEffect(() => {
       if(logged){
        conectarSocket();
       }
    }, [conectarSocket, logged]);
    
    useEffect(() => {
       if(!logged){
        desconectarSocket();
       }
    }, [desconectarSocket, logged]);
   
    //cambios de usuarios conectados
    useEffect(() => {
       socket?.on("lista-usuarios", (usuarios)=>{
           dispatch(cargarUsuarios(usuarios));
       })
    }, [dispatch, socket]);

    useEffect(() => {
        socket?.on("mensaje-personal",(mensaje) =>{
            dispatch(nuevoMensaje(mensaje));
            scrollToBottomAnimated("mensajes");
        });
    }, [socket, dispatch]);

    return (
        <SocketContext.Provider value={{ socket, online }}>
            { children }
        </SocketContext.Provider>
    )
}