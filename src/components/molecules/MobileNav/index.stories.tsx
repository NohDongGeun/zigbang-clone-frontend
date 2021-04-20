import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";
import MobileNav from ".";

export default {
  title: "Molecules/MobileNav",
  component: MobileNav,
} as Meta;

export const BasicMobileNav: React.FC = () => {
  return (
    <MobileNav
      logged={boolean("logged", false)}
      name={text("name", "로그인 및 회원가입")}
      isAgency={boolean("isAgency", false)}
      handleSideNav={action("handleSideNav")}
      showNav={boolean("showNav", true)}
    />
  );
};
