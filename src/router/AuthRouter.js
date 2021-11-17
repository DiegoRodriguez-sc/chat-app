import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

import "../css/login-register.css";

const AuthRouter = () => {
  return (
    <div className="limiter">
      <div className="container">
          <Switch>
            <Route exact path="/auth/login" component={LoginPage} />
            <Route exact path="/auth/register" component={RegisterPage} />
            <Redirect to="/auth/login" />
          </Switch>
      </div>
    </div>
  );
};

export default AuthRouter;
