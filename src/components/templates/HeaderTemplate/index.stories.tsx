import { Meta } from "@storybook/react";
import React from "react";
import HeaderAndSidebar from "./index";

export default {
  title: "Templates/HeaderAndSidebar",
  component: HeaderAndSidebar,
} as Meta;

export const HeaderTemplate: React.FC = () => {
  return <HeaderAndSidebar />;
};
