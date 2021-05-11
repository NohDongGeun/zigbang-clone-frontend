import React from "react";
import { Route } from "react-router";
import { useMe } from "../../../hooks/useMe";
import NotFound from "../../../pages/NotFound";
import { IPrivateRouter } from "../PrivateRouter";

const PrivateVerifiedRouter: React.FC<IPrivateRouter> = ({
  children,
  path,
}) => {
  const { data } = useMe();

  return (
    <>
      {data?.me.verified === "verified" || !data?.me.id ? (
        <NotFound
          errorMessage={"이미 인증 받은 아이디입니다."}
          path={"/room"}
          pathLabel={"홈으로 가기"}
        />
      ) : (
        <Route exact path={path}>
          {children}
        </Route>
      )}
    </>
  );
};

export default PrivateVerifiedRouter;
