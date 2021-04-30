import React from "react";
import { USER_NAV } from "../../../../constants/nav";
import NavItem from "../NavItem";

const SidebarUserNav: React.FC = () => {
  return (
    <nav className={"p-3"}>
      <ul className={"flex flex-col"}>
        {USER_NAV.map((e, i) => (
          <NavItem to={e.url} label={e.name} key={i} Component={e.Component} />
        ))}
      </ul>
    </nav>
  );
};

export default SidebarUserNav;
