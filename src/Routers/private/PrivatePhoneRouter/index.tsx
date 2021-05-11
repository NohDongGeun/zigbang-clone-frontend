import React from "react";
import { Route } from "react-router";
import { useMe } from "../../../hooks/useMe";
import { IPrivateRouter } from "../PrivateRouter";

const PrivatePhoneRouter: React.FC<IPrivateRouter> = ({ children, path }) => {
  const { data } = useMe();

  return (
    <>
      {data?.me.verified === "verified" && data?.me.isAgency === false ? (
        <Route exact path={path}>
          {children}
        </Route>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default PrivatePhoneRouter;
