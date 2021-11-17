import React from "react";
import { useSelector } from "react-redux";
import ChatSelect from "../components/ChatSelect";
import InboxPeople from "../components/InboxPeople";
import Messages from "../components/Messages";
import "../css/chat.css";

const ChatPage = () => {

  const {chatActivo} = useSelector(state => state.chat);

  return (
    <div className="messaging">
      <div className="inbox_msg">
        <InboxPeople />
        {
          chatActivo 
           ? <Messages />
           : <ChatSelect />
        }
      </div>
    </div>
  );
};

export default ChatPage;
