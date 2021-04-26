import { Meta } from "@storybook/react";
import React from "react";
import Sidebar from ".";

export default {
  title: "Organisms/Sidebar",
  component: Sidebar,
} as Meta;

export const BasicSidebar: React.FC = () => {
  return <Sidebar />;
};
