import React from "react";
import { Button } from "../..";

interface IUserNav {
  logOut: () => void;
}

const UserNav: React.FC<IUserNav> = ({ logOut }) => {
  return (
    <aside
      className={
        " flex z-10 shadow-xl bg-white w-48  flex-col absolute transform translate-y-0 border border-gray-300"
      }
    >
      <Button
        className={"hover:bg-gray-100 text-gray-600 border-b border-gray-300 p-2 text-center"}
        to={"/my/profile"}
        label={"내 정보"}
      />
      <Button
        className={"hover:bg-gray-100 text-gray-600  p-2 text-center"}
        onClick={logOut}
        label={"로그아웃"}
      />
    </aside>
  );
};

export default UserNav;
