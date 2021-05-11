import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { Header } from "../..";
import Sidebar from "../../organisms/Sidebar";

const HeaderAndSidebar = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/my/auth/verify" ||
      location.pathname === "/my/auth/code" ||
      location.pathname === "/my/profile/modify_name" ||
      location.pathname === "/my/profile/modify_password" ||
      location.pathname === "/signup" ||
      location.pathname === "my/search_email" ||
      location.pathname === "/my/search_password" ? (
        <></>
      ) : (
        <>
          <Header />
          <Sidebar />
        </>
      )}
    </>
  );
};

export default HeaderAndSidebar;
