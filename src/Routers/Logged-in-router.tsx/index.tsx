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
import NotFound from "../../pages/NotFound";

const USER_ROUTER = [
  { path: "/my/rooms", component: <Zzim />, exact: true },
  { path: "/my/profile/", component: <Profile />, exact: true },
  { path: "/my/profile/modify_name", component: <ModifyName />, exact: true },
  {
    path: "/my/profile/modify_password",
    component: <ModifyPassword />,
    exact: true,
  },
];

const USER_VERIFIED_ROUTER = [
  { path: "/my/auth/verify", component: <Auth />, exact: true },
  { path: "/my/auth/code", component: <AuthNext />, exact: true },
];
const USER_PRIVATE_ROUTER = [
  { path: "/my/register", component: <CreateAgency />, exact: true },
];

export const AGENCY_ROUTER = [
  { path: "/agency", component: <Agency />, exact: true },
  { path: "/agency/room/:id", component: <RoomDetail />, exact: true },
  { path: "/agency/create-room", component: <CreateRoom />, exact: true },
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
            <PrivateRouter path={route.path} data={data} exact={route.exact}>
              {route.component}
            </PrivateRouter>
          );
        })}
        {USER_VERIFIED_ROUTER.map((route) => {
          return (
            <PrivateVerifiedRouter
              path={route.path}
              data={data}
              exact={route.exact}
            >
              {route.component}
            </PrivateVerifiedRouter>
          );
        })}
        {USER_PRIVATE_ROUTER.map((route) => {
          return (
            <PrivatePhoneRouter
              path={route.path}
              data={data}
              exact={route.exact}
            >
              {route.component}
            </PrivatePhoneRouter>
          );
        })}
        {AGENCY_ROUTER.map((route) => {
          return (
            <PrivateAgencyRouter
              path={route.path}
              data={data}
              exact={route.exact}
            >
              {route.component}
            </PrivateAgencyRouter>
          );
        })}
        <Route>
          <NotFound
            errorMessage={"찾을 수 없는 페이지입니다."}
            path={"/room"}
            pathLabel={"홈으로 가기"}
          />
        </Route>
      </Switch>
    </Router>
  );
};

export default LoggedInRouter;
