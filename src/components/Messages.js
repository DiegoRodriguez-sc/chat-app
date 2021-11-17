import React from "react";
import { useSelector } from "react-redux";
import IncomingMessage from "./IncomingMessage";
import OutgoingMessage from "./OutgoingMessage";
import SendMessage from "./SendMessage";

const Messages = () => {
  
  const {mensajes} = useSelector(state => state.chat);
  const {uid} = useSelector(state => state.auth);
  return (
    <div className="mesgs">
      <div 
       id="mensajes"
       className="msg_history">
      {
        mensajes.map(msg => msg.para === uid 
                        ? <IncomingMessage 
                            key={msg._id}
                            msg={msg}
                          />
                        : <OutgoingMessage 
                            key={msg._id}
                            msg={msg}
                          />)
      }
      </div>
      <SendMessage />
    </div>
  );
};
export default Messages;
