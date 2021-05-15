import { Meta } from "@storybook/react";
import React from "react";
import { Icon } from "../..";
import logobox from "../../../assets/img/logobox.jpg";

export default {
  title: "Atoms/Icon",
  component: Icon,
} as Meta;

export const BasicIcon: React.FC = () => {
  return <Icon src={logobox} alt={"로고박스"} />;
};
