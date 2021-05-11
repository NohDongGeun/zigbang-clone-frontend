import React from "react";
import { Route } from "react-router";
import { useMe } from "../../../hooks/useMe";
import NotFound from "../../../pages/NotFound";

export interface IPrivateRouter {
  path: string;
}

const PrivateRouter: React.FC<IPrivateRouter> = ({ children, path }) => {
  const { data } = useMe();

  return (
    <>
      {data?.me.id ? (
        <Route exact path={path}>
          {children}
        </Route>
      ) : (
        <NotFound
          errorMessage={"로그인 후 이용하세요."}
          path={"/login"}
          pathLabel={"로그인 페이지"}
        />
      )}
    </>
  );
};

export default PrivateRouter;
