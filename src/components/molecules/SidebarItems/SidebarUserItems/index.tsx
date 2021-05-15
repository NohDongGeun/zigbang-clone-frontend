import React from "react";
import { USER_NAV } from "../../../../constants/nav";
import NavItem from "../NavItem";
import { BiUserPlus } from "react-icons/bi";

interface ISidebarUserNav {
  isAgency: boolean;
}

const SidebarUserNav: React.FC<ISidebarUserNav> = ({ isAgency }) => {
  return (
    <nav className={"p-3"}>
      <ul className={"flex flex-col"}>
        {USER_NAV.map((e, i) => (
          <NavItem to={e.url} label={e.name} key={i} Component={e.Component} />
        ))}
        {!isAgency && (
          <NavItem
            to={"/my/register"}
            Component={BiUserPlus}
            label={"중개사 가입하기"}
          />
        )}
      </ul>
    </nav>
  );
};

export default SidebarUserNav;
