import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { Header } from "../..";
import { headerLocation } from "../../../constants/location";
import Sidebar from "../../organisms/Sidebar";

const HeaderAndSidebar = () => {
  const location = useLocation();

  return (
    <>
      {headerLocation.indexOf(location.pathname) !== -1 ? (
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
