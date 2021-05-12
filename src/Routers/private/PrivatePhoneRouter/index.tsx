import React from "react";
import { Route } from "react-router";
import { useMe } from "../../../hooks/useMe";
import NotFound from "../../../pages/NotFound";
import { IPrivateRouter } from "../PrivateRouter";

const PrivatePhoneRouter: React.FC<IPrivateRouter> = ({
  children,
  path,
  exact,
  data,
}) => {
  return (
    <>
      {data?.me.verified === "verified" && data?.me.isAgency === false ? (
        <Route exact={exact} path={path}>
          {children}
        </Route>
      ) : (
        <NotFound
          errorMessage={"이미 등록된 중개사입니다."}
          path={"/agency"}
          pathLabel={"중개사 페이지로 이동"}
        />
      )}
    </>
  );
};

export default PrivatePhoneRouter;
