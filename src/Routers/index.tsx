import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Room from "../pages/Room";
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
      </Switch>
    </Router>
  );
};

export default Routers;
