import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Room from "../pages/Room";
import Auth from "../pages/User/Auth/Auth";
import AuthNext from "../pages/User/Auth/AuthNext";
import FindId from "../pages/User/Find/FindId";
import FindPassword from "../pages/User/Find/FindPassword";
import Login from "../pages/User/Login";
import Signup from "../pages/User/Signup";

const Routers: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/room" exact component={Room} />
        <Route path="/room/:id" component={Room} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/my/auth" component={Auth} />
        <Route path="/my/authNext" component={AuthNext} />
        <Route path="/find/id" component={FindId} />
        <Route path="/find/password" component={FindPassword} />
      </Switch>
    </Router>
  );
};

export default Routers;
