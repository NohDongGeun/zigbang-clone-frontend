import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Button, Img, MobileNav, Text, UserNav } from "../..";
import logo from "../../../assets/img/eroomLogo.png";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import menu from "../../../assets/img/menu.png";
import { useMe } from "../../../hooks/useMe";
import { authTokenVar, isLoggedInVar, sidebarVar } from "../../../apollo";
import "./style.css";
import Sidebar from "../Sidebar";
import { useReactiveVar } from "@apollo/client";

const Header: React.FC = () => {
  const onSidebar = useReactiveVar(sidebarVar);

  const handleSidebar = () => {
    sidebarVar(!onSidebar);
  };

  return (
    <div className={"flex flex-row w-screen overflow-x-hidden relative"}>
      <nav
        className={
          "bg-white w-screen px-5 py-3 flex flex-row border-b border-gray-300 h-20 fixed transform z-10 "
        }
      >
        <ul className={"flex-1  flex justify-start items-center"}>
          <li className={"w-full h-full"}>
            <Button to={"/room"} className={"w-full h-full "}>
              <div
                className={"w-full h-full bg-no-repeat bg-contain"}
                style={{ backgroundImage: `url(${logo})` }}
              ></div>
            </Button>
          </li>
        </ul>
        <ul className={"flex-1  flex justify-end items-center"}>
          <li className={""}>
            <Button className={"wrapper-icon"} onClick={handleSidebar}>
              <FontAwesomeIcon
                className={"menu-bar"}
                icon={faBars}
                color={"#7A57D1"}
                size={"2x"}
              />
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
