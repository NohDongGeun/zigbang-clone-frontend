import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import Auth from "../../pages/User/Auth/Auth";
import AuthNext from "../../pages/User/Auth/AuthNext";
import Profile from "../../pages/User/profile/Profile";
import Agency from "../../pages/Agency/Home";
import CreateRoom from "../../pages/Agency/CreateRoom";
import AgencyProfile from "../../pages/Agency/AgencyProfile";
import RoomDetail from "../../pages/Agency/RoomDetail";
import { COMMON_ROUTER } from "../Logged-out-router.tsx";
import ModifyName from "../../pages/User/profile/Modify/ModifyName";
import ModifyPassword from "../../pages/User/profile/Modify/ModifyPassword";
import { useMe } from "../../hooks/useMe";
import { Loading } from "../../components";
import HeaderAndSidebar from "../../components/templates/HeaderTemplate";
import Zzim from "../../pages/User/Zzim";
import CreateAgency from "../../pages/Agency/CreateAgency";
import PrivateRouter from "../private/PrivateRouter";
import PrivatePhoneRouter from "../private/PrivatePhoneRouter";
import PrivateAgencyRouter from "../private/PrivateAgencyRouter";
import PrivateVerifiedRouter from "../private/PrivateVertifyRouter";

const USER_ROUTER = [
  { path: "/my/rooms", component: <Zzim /> },
  { path: "/my/profile/", component: <Profile /> },
  { path: "/my/profile/modify_name", component: <ModifyName /> },
  { path: "/my/profile/modify_password", component: <ModifyPassword /> },
];

const USER_VERIFIED_ROUTER = [
  { path: "/my/auth/verify", component: <Auth /> },
  { path: "/my/auth/code", component: <AuthNext /> },
];
const USER_PRIVATE_ROUTER = [
  { path: "/my/register/agency", component: <CreateAgency /> },
];

export const AGENCY_ROUTER = [
  { path: "/agency", component: <Agency /> },
  { path: "/agency/create-room", component: <CreateRoom /> },
  { path: "/agency/room/:id", component: <RoomDetail /> },
];

const LoggedInRouter = () => {
  const { data, loading, error } = useMe();

  if (!data || loading || error) {
    return <Loading />;
  }
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
        {USER_ROUTER.map((route) => {
          return (
            <PrivateRouter path={route.path}>{route.component}</PrivateRouter>
          );
        })}
        {USER_VERIFIED_ROUTER.map((route) => {
          return (
            <PrivateVerifiedRouter path={route.path}>
              {route.component}
            </PrivateVerifiedRouter>
          );
        })}
        {USER_PRIVATE_ROUTER.map((route) => {
          return (
            <PrivatePhoneRouter path={route.path}>
              {route.component}
            </PrivatePhoneRouter>
          );
        })}
        {AGENCY_ROUTER.map((route) => {
          return (
            <PrivateAgencyRouter path={route.path}>
              {route.component}
            </PrivateAgencyRouter>
          );
        })}
        <Route>
          <div>sdasd</div>
        </Route>
      </Switch>
    </Router>
  );
};

export default LoggedInRouter;
