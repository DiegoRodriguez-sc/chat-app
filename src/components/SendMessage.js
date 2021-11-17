import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { SocketContext } from "../context/SocketContext";
import { useForm } from "../hooks/useForm";

const SendMessage = () => {

  const {socket} = useContext(SocketContext);
  const {uid} = useSelector(state => state.auth);
  const {chatActivo} = useSelector(state => state.chat);

  const initialForm = {
    mensaje:"",
  };
  const [ formValues, handleInputChange, reset] = useForm(initialForm);

  const {mensaje} = formValues;

  const  handleOnSubmit = (ev) =>{
      ev.preventDefault();
      
      socket.emit("mensaje-personal",{
        de:uid,
        para:chatActivo,
        mensaje
      });

      reset();
  }
  return (
   <form onSubmit={handleOnSubmit} >
    <div className="type_msg row">
      <div className="input_msg_write col-sm-9">
        <input 
          type="text" 
          className="write_msg" 
          placeholder="Mensaje..." 
          autoComplete="off"
          name="mensaje"
          value={mensaje}
          onChange={handleInputChange}
          />
      </div>
      <div className="col-sm-3 text-center">
        <button className="msg_send_btn mt-3" type="submit">
          enviar
        </button>
      </div>
    </div>
   </form>
  );
};

export default SendMessage;
