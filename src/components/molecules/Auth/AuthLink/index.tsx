import React from "react";
import { Button } from "../../..";

const AuthLink = () => {
  return (
    <div className={"flex flex-initial flex-row py-2"}>
      <Button
        to={"/my/findId"}
        className={
          " flex flex-1 border-r  text-xs text-gray-500 justify-center items-center"
        }
        label={"아이디 찾기"}
      />
      <Button
        to={"/my/findPassword"}
        className={
          " flex flex-1 border-r  text-xs text-gray-500 justify-center items-center"
        }
        label={"비밀번호 찾기"}
      />
      <Button
        to={"/signup"}
        className={
          " flex flex-1  text-xs text-gray-500  justify-center items-center"
        }
        label={"회원가입"}
      />
    </div>
  );
};

export default AuthLink;
