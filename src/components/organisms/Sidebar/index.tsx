import React, { useRef, useState } from "react";
import { Button, Img } from "../..";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useReactiveVar } from "@apollo/client";
import { sidebarVar } from "../../../apollo";
import onClickOutside from "react-onclickoutside";
import { useOutsideClick } from "../../../hooks/useOutsideClick";

const Sidebar = () => {
  const onSidebar = useReactiveVar(sidebarVar);
  const ref = useRef<HTMLDivElement>(null);

  const handleSidebar = () => {
    sidebarVar(!onSidebar);
  };
  useOutsideClick(ref, () => sidebarVar(false));

  return (
    <aside
      ref={ref}
      className={`fixed h-screen w-400 bg-primary flex flex-col z-50 rounded-l-2xl transform ease-out duration-500 ${
        onSidebar ? "top-0 right-0" : "-right-400"
      }`}
    >
      <div
        className={
          "flex justify-between items-center border-b border-white h-20 px-3"
        }
      >
        <Button
          className={"text-white font-bold text-base hover:opacity-80"}
          label={"로그인 및 회원가입"}
        />
        <Button onClick={handleSidebar}>
          <FontAwesomeIcon
            className={"hover:opacity-80"}
            icon={faTimes}
            color={"#fff"}
            size={"2x"}
          />
        </Button>
      </div>
      <nav className={"p-5 flex flex-col "}>
        <ul className={"flex-1"}>
          <li className={"flex"}>
            <Button
              className={
                "flex-1  py-3 text-white font-semibold hover:opacity-80"
              }
              label={"방 찾기"}
              to={"/room"}
            />
          </li>
          <li className={"flex"}>
            <Button
              className={
                "flex-1  py-3 text-white font-semibold hover:opacity-80"
              }
              label={"찜한 목록"}
              to={"/room"}
            />
          </li>
          <li className={"flex"}>
            <Button
              className={
                "flex-1  py-3 text-white font-semibold hover:opacity-80"
              }
              label={"내 정보"}
              to={"/room"}
            />
          </li>
          <li className={"flex"}>
            <Button
              className={
                "flex-1  py-3 text-white font-semibold hover:opacity-80"
              }
              label={"중개사 페이지로 이동"}
              to={"/room"}
            />
          </li>
        </ul>
      </nav>
      <div className={"flex-1 flex justify-center items-end"}>
        <Button
          className={
            "py-5 border-t border-gray-300 w-full hover:opacity-80 text-white font-semibold"
          }
          label={"로그아웃"}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
