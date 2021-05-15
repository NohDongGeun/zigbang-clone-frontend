import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";
import { SidebarBox } from "../../..";

export default {
  title: "Molecules/SidebarBox",
  component: SidebarBox,
} as Meta;

export const BasicSidebarBox: React.FC = () => {
  return (
    <SidebarBox
      handleSidebar={action("handleSidebar")}
      name={"노동근"}
      email={text("email", "sam5787@naver.com")}
    />
  );
};
