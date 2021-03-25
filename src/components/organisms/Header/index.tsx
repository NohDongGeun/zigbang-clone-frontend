import React from "react";
import { Link } from "react-router-dom";
import { Img, Text } from "../..";
import logo from "../../../assets/img/zigbang_logo.png";
import agentLogo from "../../../assets/img/ceo_ad_img.png";
import arrow from "../../../assets/img/arrowUp.png";

interface IHeader {
  /**
   * 로그인 여부
   */
  logged: boolean;

  /**
   * user name
   */
  name: string;
}

const Header: React.FC<IHeader> = ({ logged, name }) => {
  return (
    <nav className={"w-screen flex border border-gray-300"}>
      <ul className={"flex flex-row items-center flex-1"}>
        <li className={"flex-initial p-3 "}>
          <Link className={"w-full"} to={"/"}>
            <Img className={"w-28 h-12"} src={logo} alt={"홈으로 가기"} />
          </Link>
        </li>
        <li className={"flex-initial  p-5 "}>
          <Link to={"/"}>
            <Text
              className={"text-lg font-bold hover:text-yellow-600"}
              label={"방 찾기"}
            />
          </Link>
        </li>
        {logged && (
          <li className={"flex-initial p-5"}>
            <Link to={"/"}>
              <Text
                className={"text-lg font-bold hover:text-yellow-600"}
                label={"찜한 매물"}
              />
            </Link>
          </li>
        )}
      </ul>
      <ul className={"flex flex-row flex-1 items-center justify-end"}>
        <li
          className={
            " flex-initial p-2 justify-end border bg-gray-300 rounded-md "
          }
        >
          {logged ? (
            <Link to={"/"} className={""}>
              <Text label={name} className={"flex justify-end text-sm "} />
            </Link>
          ) : (
            <Link to={"/"}>
              <Text label={"로그인/회원가입"} className={"flex justify-end"} />
            </Link>
          )}
        </li>
        <li className={"flex-initial p-3"}>
          <Link to={"/"} className={"flex justify-end"}>
            <Img
              className={"w-32 h-12"}
              src={agentLogo}
              alt={"중개사무소 바로가기"}
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
