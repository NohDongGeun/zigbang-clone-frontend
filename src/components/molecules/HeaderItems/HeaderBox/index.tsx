import React from "react";
import { Button } from "../../..";

const HeaderBox: React.FC = () => {
  return (
    <Button
      className={
        "sm:px-1 sm:py-1 md:px-2 md:py-2 border border-gray-300 sm:text-xs md:text-sm font-semibold text-gray-500 rounded-md hover:text-yellow-400 hover:border-yellow-400 "
      }
      to={"/login"}
      label={"로그인 및 회원가입"}
    />
  );
};

export default HeaderBox;
