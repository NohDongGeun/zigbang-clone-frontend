import React from "react";
import { AGENCY_NAV, USER_NAV } from "../../../../constants/nav";
import NavItem from "../NavItem";
import { RiHomeLine } from "react-icons/ri";

const SidebarAgencyNav: React.FC = () => {
  return (
    <nav className={"p-3"}>
      <ul className={"flex flex-col"}>
        {AGENCY_NAV.map((e, i) => (
          <NavItem to={e.url} label={e.name} key={i} Component={e.Component} />
        ))}
      </ul>
    </nav>
  );
};

export default SidebarAgencyNav;
