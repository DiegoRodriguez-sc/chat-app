import React from "react";
import { useSelector } from "react-redux";
import SideBarChatItem from "./SideBarChatItem";

const SideBar = () => {

  const {usuarios} = useSelector(state => state.chat);
  const {uid} = useSelector(state => state.auth);

  return (
    <div className="inbox_chat">
      {
        usuarios.filter( usuario => usuario.uid !== uid).map(usuario => 
            <SideBarChatItem 
              key={usuario.uid} 
              usuario={usuario}  
              /> )
      }  
      <div className="extra_space"></div>
    </div>
  );
};

export default SideBar;
