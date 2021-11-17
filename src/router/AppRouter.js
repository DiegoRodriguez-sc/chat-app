import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import { startRenovarToken } from "../actions/auth";
import ChatPage from "../pages/ChatPage";
import AuthRouter from "./AuthRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

const AppRouter = () => {

  const dispatch = useDispatch();
  const {logged} = useSelector(state => state.auth);
  const {checking} = useSelector(state => state.auth);

  useEffect(() => {
    
    dispatch(startRenovarToken());

  }, [dispatch]);

  if(checking){
    return (
      <div>Cargando...</div>
    )
  };

  return (
    <Router>
      <div>
        <Switch>
           <PublicRoute 
            path="/auth" 
            isAuthenticated={logged}
            component={AuthRouter}
         />
           <PrivateRoute 
            exact path="/"
            isAuthenticated={logged}
            component={ChatPage} 
          />
           <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;