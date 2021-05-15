import { Meta } from "@storybook/react";
import React from "react";
import { SidebarAgencyNav } from "../../..";

export default {
  title: "Molecules/SidebarAgencyNav",
  component: SidebarAgencyNav,
} as Meta;

export const BasicSidebarAgencyNav: React.FC = () => {
  return <SidebarAgencyNav />;
};
