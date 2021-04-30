import React from "react";
import { IconType } from "react-icons/lib";
import { RiHomeLine } from "react-icons/ri";
import { Button, Text } from "../../..";
import { sidebarVar } from "../../../../apollo";

interface INavItem {
  to: string;
  label: string;
  Component: IconType;
}

const NavItem: React.FC<INavItem> = ({ to, label, Component }) => {
  return (
    <li className={"p-3 "}>
      <Button
        to={to}
        className={
          "flex flex-row w-full p-3 hover:bg-gray-200 rounded-xl justify-start items-center"
        }
      >
        <Component className={"text-gray-500 mr-3"} size={"25"} />
        <Text className={"text-gray-500 text-lg font-medium"} label={label} />
      </Button>
    </li>
  );
};

export default NavItem;
