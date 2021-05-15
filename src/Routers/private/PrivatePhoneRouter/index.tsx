import React, { useEffect, useState } from "react";
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
  if (data.me.verified !== "verified") {
    return (
      <NotFound
        errorMessage={"휴대폰 인증 후 이용해 주세요."}
        path={"/my/auth/verify"}
        pathLabel={"인증하러 가기"}
      />
    );
  }
  if (data.me.isAgency) {
    return (
      <NotFound
        errorMessage={"이미 등록된 중개사입니다."}
        path={"/agency"}
        pathLabel={"중개사 페이지로 이동"}
      />
    );
  }
  return (
    <Route exact={exact} path={path}>
      {children}
    </Route>
  );
};

export default PrivatePhoneRouter;
