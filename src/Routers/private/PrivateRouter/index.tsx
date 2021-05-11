import React from "react";
import { Route } from "react-router";
import { useMe } from "../../../hooks/useMe";

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
        <div></div>
      )}
    </>
  );
};

export default PrivateRouter;
