import React, { useState } from "react";
import { Button, Img, Text } from "../..";
import { AGENCY_NAV, USER_NAV } from "../../../constants/nav";
import arrow from "../../../assets/img/arrow_right.png";

interface IMobileNav {
  logged: boolean;
  name: string;
  isAgency: boolean;
  handleSideNav: () => void;
  showNav: boolean;
}

const MobileNav: React.FC<IMobileNav> = ({
  logged,
  name,
  isAgency,
  handleSideNav,
  showNav,
}) => {
  return (
    <aside
      className={`bg-primary flex h-screen flex-col border border-gray-300 sm:w-56 md:w-80  z-10 absolute rounded-l-md shadow-sm transform ${
        showNav ? "-translate-x-full" : "translate-x-full"
      } `}
    >
      <div
        className={"flex-col w-full  px-3  flex justify-center items-center"}
      >
        <Button className={"w-full h-64 md:h-88"} onClick={handleSideNav}>
          <Img className={"w-8 h-8"} src={arrow} alt={"슬라이드 닫기"} />
        </Button>
        {logged ? (
          <Text
            className={
              "font-semibold mb-3 text-white hover:text-yellow-400 hover:border-yellow-400 rounded-md border p-2 border-gray-300"
            }
            label={name}
          />
        ) : (
          <Button
            className={
              "font-semibold mb-3 text-white hover:text-yellow-400 hover:border-yellow-400 rounded-md border p-2 border-gray-300"
            }
            to={"/login"}
            label={"로그인 및 회원가입"}
          />
        )}
      </div>
      <nav className={"w-full"}>
        <ul className={"flex flex-col"}>
          {isAgency
            ? AGENCY_NAV.map((e, i) => {
                return (
                  <li
                    className={
                      "p-3  flex justify-center items-center"
                    }
                    key={i}
                  >
                    <Button
                      className={
                        "text-semibold font-semibold text- hover:text-yellow-400 "
                      }
                      to={e.url}
                      label={e.name}
                    />
                  </li>
                );
              })
            : USER_NAV.map((e, i) => {
                return (
                  <li
                    className={
                      "p-3 border-b border-gray-300 flex justify-center items-center"
                    }
                    key={i}
                  >
                    <Button
                      className={
                        "text-semibold font-semibold text-gray-600 hover:text-yellow-400 "
                      }
                      to={e.url}
                      label={e.name}
                    />
                  </li>
                );
              })}
          <li
            className={
              "p-3 border-b border-gray-300 flex justify-center items-center"
            }
          >
            <Button
              className={
                "text-semibold font-semibold text-gray-600 hover:text-yellow-400 "
              }
              to={isAgency ? "/room" : "/room"}
              label={"내 정보"}
            />
          </li>
        </ul>
      </nav>
      <div className={"flex flex-1 justify-center items-end"}>
        <Button
          className={
            "flex-1 border-t border-gray-300 p-3 font-semibold text-gray-600 hover:text-yellow-400"
          }
          label={"로그아웃"}
        />
      </div>
    </aside>
  );
};

export default MobileNav;
