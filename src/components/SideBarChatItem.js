import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cargarMensajes, setChatActivo } from "../actions/chat";
import { fetchConToken } from "../helpers/fetch";
import { scrollToBottom } from "../helpers/scroll";

const SideBarChatItem = ({usuario}) => {


  const {chatActivo} = useSelector(state => state.chat);

  const dispatch = useDispatch();

  const handleClick = async() =>{
      dispatch(setChatActivo(usuario.uid));
      console.log(usuario.uid);
      // cargar los mensajes de chat
      const resp = await fetchConToken(`mensajes/${usuario.uid}`);
      const data = await resp.json();
      dispatch(cargarMensajes(data.msg));

      scrollToBottom("mensajes");
  }

  return (
    <div 
     className={`chat_list ${chatActivo === usuario.uid && `active_chat`} `}
     onClick={handleClick}
     >
    {/* active_chat */}
      <div className="chat_people">
        <div className="chat_img">
          <img
            src="https://ptetutorials.com/images/user-profile.png"
            alt="sunil"
          />
        </div>
        <div className="chat_ib">
          <h5>{usuario.nombre}</h5>
          {
            usuario.online 
             ? <span className="text-success">Online</span>
             : <span className="text-danger">Offline</span>
          }
        </div>
      </div>
    </div>
  );
};
export default SideBarChatItem;
