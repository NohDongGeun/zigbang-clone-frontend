import React from "react";
import { Route } from "react-router";
import { useMe } from "../../../hooks/useMe";
import { IPrivateRouter } from "../PrivateRouter";

const PrivateVerifiedRouter: React.FC<IPrivateRouter> = ({
  children,
  path,
}) => {
  const { data } = useMe();

  return (
    <>
      {data?.me.verified === "verified" || !data?.me.id ? (
        <div></div>
      ) : (
        <Route exact path={path}>
          {children}
        </Route>
      )}
    </>
  );
};

export default PrivateVerifiedRouter;
