import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderAndSidebar from "../../components/templates/HeaderTemplate";
import NotFound from "../../pages/NotFound";

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
      <HeaderAndSidebar />
      <Switch>
        {COMMON_ROUTER.map((route) => {
          return (
            <Route exact path={route.path}>
              {route.component}
            </Route>
          );
        })}
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/my/search_email">
          <FindId />
        </Route>
        <Route exact path="/my/search_password">
          <FindPassword />
        </Route>
        <Route>
          <NotFound
            errorMessage={"찾을 수 없는 페이지입니다. :)"}
            path={"/room"}
            pathLabel={"홈으로 가기"}
          />
        </Route>
      </Switch>
    </Router>
  );
};

export default LoggedOutRouter;
