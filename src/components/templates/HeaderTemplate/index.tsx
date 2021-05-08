import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { Header } from "../..";
import Sidebar from "../../organisms/Sidebar";

const HeaderAndSidebar = () => {
  const location = useLocation();

  return (
    <>
      {(location.pathname !== "/my/auth/verify" ||
        "/my/auth/code" ||
        "/my/profile/modify_name" ||
        "/my/profile/modify_password" ||
        "/signup" ||
        "my/search_email" ||
        "/my/search_password") && (
        <>
          <Header />
          <Sidebar />
        </>
      )}
    </>
  );
};

export default HeaderAndSidebar;
