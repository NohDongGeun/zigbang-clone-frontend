import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../../pages/User/Auth/Auth";
import AuthNext from "../../pages/User/Auth/AuthNext";
import Profile from "../../pages/User/Profile";
import Agency from "../../pages/Agency/Home";
import CreateRoom from "../../pages/Agency/CreateRoom";
import AgencyProfile from "../../pages/Agency/AgencyProfile";
import RoomDetail from "../../pages/Agency/RoomDetail";
import { COMMON_ROUTER } from "../Logged-out-router.tsx";

const USER_ROUTER = [
  { path: "/my/auth/verify", component: <Auth /> },
  { path: "/my/auth/code", component: <AuthNext /> },
  { path: "/my/profile/:id", component: <Profile /> },
];

const AGENCY_ROUTER = [
  { path: "/agency", component: <Agency /> },
  { path: "/agency/create-room", component: <CreateRoom /> },
  { path: "/agency/profile/:id", component: <AgencyProfile /> },
  { path: "/agency/room/:id", component: <RoomDetail /> },
];

const LoggedInRouter = () => {
  return (
    <Router>
      <Switch>
        {COMMON_ROUTER.map((route, i) => {
          return (
            <Route path={route.path} key={i}>
              {route.component}
            </Route>
          );
        })}
        {USER_ROUTER.map((route, i) => {
          return (
            <Route path={route.path} key={i}>
              {route.component}
            </Route>
          );
        })}
        {AGENCY_ROUTER.map((route, i) => {
          return (
            <Route path={route.path} key={i}>
              {route.component}
            </Route>
          );
        })}
      </Switch>
    </Router>
  );
};

export default LoggedInRouter;
