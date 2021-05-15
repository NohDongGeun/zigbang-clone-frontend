import React, { useEffect } from "react";
import { Route } from "react-router";
import NotFound from "../../../pages/NotFound";
import { IPrivateRouter } from "../PrivateRouter";

const PrivateAgencyRouter: React.FC<IPrivateRouter> = ({
  children,
  path,
  data,
  exact,
}) => {
  useEffect(() => {
    console.log(path);
  }, [path]);
  return (
    <>
      {data?.me.isAgency ? (
        <Route exact={exact} path={path}>
          {children}
        </Route>
      ) : (
        <NotFound
          errorMessage={"중개사 가입 후 이용해 주세요."}
          path={"/my/register"}
          pathLabel={"중개사 가입 페이지로 이동"}
        />
      )}
    </>
  );
};

export default PrivateAgencyRouter;
