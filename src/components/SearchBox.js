import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../actions/auth";
import { limpiarEstado } from "../actions/chat";

const SearchBox = () => {

  const {nombre} = useSelector(state => state.auth);
   const dispatch = useDispatch();

  const hanldeLogout = () =>{ 
      dispatch(startLogout());
      dispatch(limpiarEstado());
  }

  return (
    <div className="headind_srch">
      <div className="recent_heading mt-2">
        <h4>{nombre}</h4>
      </div>
      <div className="srch_bar">
        <div className="stylish-input-group">
          <button 
           className="btn text-danger"
           onClick={hanldeLogout}
           >Salir</button>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
