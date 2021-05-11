import React from "react";
import { Route } from "react-router";
import { useMe } from "../../../hooks/useMe";
import NotFound from "../../../pages/NotFound";
import { IPrivateRouter } from "../PrivateRouter";

const PrivateAgencyRouter: React.FC<IPrivateRouter> = ({ children, path }) => {
  const { data } = useMe();

  return (
    <>
      {data?.me.verified === "verified" && data?.me.isAgency === true ? (
        <Route exact path={path}>
          {children}
        </Route>
      ) : (
        <NotFound
          errorMessage={"중개사 가입 후 이용해 주세요."}
          path={"/my/register/agency"}
          pathLabel={"중개사 가입 페이지로 이동"}
        />
      )}
    </>
  );
};

export default PrivateAgencyRouter;
