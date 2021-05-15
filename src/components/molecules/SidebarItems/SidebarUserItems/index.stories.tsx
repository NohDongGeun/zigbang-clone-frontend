import { Meta } from "@storybook/react";
import React from "react";
import { SidebarUserNav } from "../../..";

export default {
  title: "Molecules/SidebarUserNav",
  component: SidebarUserNav,
} as Meta;

export const BasicSidebarUserNav: React.FC = () => {
  return <SidebarUserNav />;
};
