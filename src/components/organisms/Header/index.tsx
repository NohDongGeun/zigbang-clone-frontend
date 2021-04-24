import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Img, MobileNav, Text, UserNav } from "../..";
import logo from "../../../assets/img/zigbang_logo.png";
import agentLogo from "../../../assets/img/ceo_ad_img.png";
import { AGENCY_NAV, USER_NAV } from "../../../constants/nav";
import menu from "../../../assets/img/menu.png";
import { useMe } from "../../../hooks/useMe";
import { authTokenVar, isLoggedInVar } from "../../../apollo";

interface IHeader {
  /**
   * 로그인 여부
   */
  logged: boolean;

  /**
   * user name
   */
  name: string;

  isAgent: boolean;

  showNav: boolean;

  handleSideNav: () => void;
}

const Header: React.FC<IHeader> = ({
  logged,
  name,
  isAgent,
  showNav,
  handleSideNav,
}) => {
  const { data } = useMe();
  const history = useHistory();
  const [subNav, setSubNav] = useState<boolean>(false);

  useEffect(() => {
    console.log(`header data:  ${data}`);
  }, [data]);

  const handleSubnav = () => {
    setSubNav((prev) => !prev);
  };
  const handleLogout = () => {
    localStorage.clear();
    authTokenVar("");
    isLoggedInVar(false);
    history.push("/room/");
  };
  return (
    <div className={"flex flex-row w-full overflow-hidden"}>
      <nav
        className={
          "w-full flex flex-row border-b border-gray-300 fixed z-10 bg-white "
        }
      >
        <ul className={"flex flex-1 justify-start items-center"}>
          <li className={"p-2 md:p-3 w-36 flex-initial"}>
            <Button to={isAgent ? "/room" : "/room"}>
              <Img
                className={"w-20 h-12 md:w-full md:h-full"}
                src={logo}
                alt={"홈으로 가기"}
              />
            </Button>
          </li>
          {isAgent
            ? AGENCY_NAV.map((e, i) => {
                return (
                  <li
                    className={
                      "p-3 sm:w-32 md:w-36 flex-initial hidden md:flex justify-center"
                    }
                  >
                    <Button
                      className={
                        "font-bold text-lg text-gray-700 hover:text-yellow-400 "
                      }
                      to={e.url}
                      label={e.name}
                      key={i}
                    />
                  </li>
                );
              })
            : USER_NAV.map((e, i) => {
                return (
                  <li
                    className={
                      "p-3  sm:w-32 md:w-36 flex-initial hidden md:flex justify-center"
                    }
                  >
                    <Button
                      className={
                        "font-bold text-lg text-gray-700 hover:text-yellow-400"
                      }
                      to={e.url}
                      label={e.name}
                      key={i}
                    />
                  </li>
                );
              })}
        </ul>
        <ul className={"flex flex-1 justify-end items-center"}>
          <li className={"md:hidden flex flex-initial p-2 md:px-3"}>
            <Button onClick={handleSideNav}>
              <Img
                className={"w-10 md:w-12 h-10 md:h-12"}
                src={menu}
                alt={"메뉴"}
              />
            </Button>
          </li>
          <li className={"hidden md:flex md:flex-col flex-initial mr-2"}>
            {data ? (
              <>
                <Button
                  className={
                    "sm:px-1 sm:py-1 md:px-2 md:py-2 border border-gray-300 sm:text-xs md:text-sm font-semibold text-gray-500 rounded-md hover:text-yellow-400 hover:border-yellow-400 "
                  }
                  label={`${data.me.name}`}
                  onClick={handleSubnav}
                />
                <div className={`relative ${subNav ? "flex" : "hidden"}`}>
                  <UserNav logOut={handleLogout} />
                </div>
              </>
            ) : (
              <Button
                className={
                  "sm:px-1 sm:py-1 md:px-2 md:py-2 border border-gray-300 sm:text-xs md:text-sm font-semibold text-gray-500 rounded-md hover:text-yellow-400 hover:border-yellow-400 "
                }
                to={"/login"}
                label={"로그인 및 회원가입"}
              />
            )}
          </li>
          {!isAgent && (
            <li
              className={
                "hidden md:flex w-40 flex-initial h-full px-3 hover:bg-gray-200"
              }
            >
              <Button to={"/room"} className={"h-full flex items-center"}>
                <Img
                  className={"w-full h-14 "}
                  src={agentLogo}
                  alt={"중개사 페이지로 가기"}
                />
              </Button>
            </li>
          )}
        </ul>
      </nav>
      <div className={"relative hidden"}>
        <MobileNav
          handleSideNav={handleSideNav}
          logged={logged}
          name={name}
          isAgency={isAgent}
          showNav={showNav}
        />
      </div>
    </div>
  );
};

export default Header;
