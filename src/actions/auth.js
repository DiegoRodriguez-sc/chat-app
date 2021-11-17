import { fetchConToken, fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";



export const startLogin = (email, password) => {
  return async(dispatch) => {

  try {
    
    const resp = await fetchSinToken("auth/login", {email, password}, "POST");
    const body = await resp.json();
  
    if(body.ok){
     localStorage.setItem("token",body.token);
     dispatch(login(body.usuario));
    }else{
      console.log(body);
      dispatch(finishChecking());
    }
    
  } catch (error) {
    console.log(error);
    dispatch(finishChecking());
  }
  };
};

export const startRenovarToken = () => {
  return async(dispatch) =>{

    try {
      const resp = await fetchConToken("auth/renew");
      const body = await resp.json();
  
      if(body.ok){
       localStorage.setItem("token", body.token);
       const {usuario} = body;
       console.log(body.msg);
       dispatch(login(usuario));
      }else{
        dispatch(finishChecking());
      }
      
    } catch (error) {
      console.log(error);
      dispatch(finishChecking());
    }
  };
};

export const startLogout = () => {
  return (dispatch) => {
      localStorage.clear();
      dispatch(logout());
  };
};

const login = (user) => ({
  type:types.authLogin,
  payload:user
});

const finishChecking = () => ({
  type:types.finishCheck
});

const logout = () => ({
  type:types.authLogout,
})