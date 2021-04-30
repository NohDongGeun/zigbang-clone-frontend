import React from "react";
import { Button, Text } from "../..";
import logo from "../../../assets/img/fontlogo.png";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isFilterVar, sidebarVar } from "../../../apollo";
import { useReactiveVar } from "@apollo/client";
import Search from "../Search";
import { BsFilterRight } from "react-icons/bs";

const Header: React.FC = () => {
  const onSidebar = useReactiveVar(sidebarVar);
  const filtervar = useReactiveVar(isFilterVar);

  const handleSidebar = () => {
    sidebarVar(!onSidebar);
  };
  const handleFilter = () => {
    isFilterVar(!filtervar);
  };

  return (
    <div className={"flex flex-row w-screen overflow-x-hidden relative"}>
      <nav
        className={
          "bg-light w-screen px-1 sm:px-5 py-3 flex flex-row  h-20 fixed  z-10"
        }
      >
        <ul className={"flex-auto  flex justify-around items-center "}>
          <li className={"flex-auto h-full mr-1 sm:mr-0"}>
            <Button to={"/room"} className={" h-full "}>
              <div
                className={
                  "w-20 md:w-28 h-full bg-no-repeat bg-contain bg-center"
                }
                style={{ backgroundImage: `url(${logo})` }}
              ></div>
            </Button>
          </li>
          <li className={"flex-auto max-w-md sm:w-64 mr-1 sm:mr-3"}>
            <Search />
          </li>
          <li className={"flex flex-shrink mr-1 sm:mr-0"}>
            <Button
              onClick={handleFilter}
              className={
                "flex flex-row justify-center items-center h-45 px-1 sm:px-3 rounded-xl bg-white shadow-3xl hover:opacity-75"
              }
            >
              <BsFilterRight className={" mr-1 text-blue-dark"} size={"20"} />
              <Text
                className={"hidden sm:flex font-bold text-blue-dark"}
                label={"필터"}
              />
            </Button>
          </li>
        </ul>
        <ul className={"flex-auto  flex justify-end items-center"}>
          <li className={""}>
            <Button className={"wrapper-icon"} onClick={handleSidebar}>
              <FontAwesomeIcon
                className={"menu-bar hover:opacity-75"}
                icon={faBars}
                color={"#1257A1"}
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
