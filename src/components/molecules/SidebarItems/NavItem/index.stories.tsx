import { Meta } from "@storybook/react";
import React from "react";
import { NavItem } from "../../..";
import { RiHomeLine } from "react-icons/ri";

export default {
  title: "Molecules/NavItem",
  component: NavItem,
} as Meta;

export const UserNavItem: React.FC = () => {
  return <NavItem to={"/room"} label={"방 찾기"} Component={RiHomeLine} />;
};
