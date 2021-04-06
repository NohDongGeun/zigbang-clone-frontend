import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Room from "../pages/Room";
import FindId from "../pages/User/FindId";
import FindPassword from "../pages/User/FindPassword";
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
        <Route path="/my/findId" component={FindId} />
        <Route path="/my/findPassword" component={FindPassword} />
      </Switch>
    </Router>
  );
};

export default Routers;
