import React from "react";
import {
  BrowserRouter as Router,
  Route,
  RouteComponentProps,
  Switch,
} from "react-router-dom";
import { useMe } from "../../hooks/useMe";
import Room from "../../pages/Room";
import FindId from "../../pages/User/Find/FindId";
import FindPassword from "../../pages/User/Find/FindPassword";
import Login from "../../pages/User/Login";
import Signup from "../../pages/User/Signup";

export const COMMON_ROUTER = [
  { path: "/room", component: <Room /> },
  { path: "/room/:id", component: <Room /> },
];

const LoggedOutRouter = () => {
  return (
    <Router>
      <Switch>
        {COMMON_ROUTER.map((route) => {
          return (
            <Route exact path={route.path}>
              {route.component}
            </Route>
          );
        })}
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/my/search_email">
          <FindId />
        </Route>
        <Route path="/my/search_password">
          <FindPassword />
        </Route>
      </Switch>
    </Router>
  );
};

export default LoggedOutRouter;
