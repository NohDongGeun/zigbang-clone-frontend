import { action } from "@storybook/addon-actions";
import { Meta } from "@storybook/react";
import React from "react";
import UserNav from ".";

export default {
  title: "Molecules/UserNav",
  component: UserNav,
} as Meta;

export const BasicUserNav: React.FC = () => (
  <UserNav logOut={action("logOut")} />
);
