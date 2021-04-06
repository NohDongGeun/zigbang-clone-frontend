import { text } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";
import RegisterLabel from "./index";

export default {
  title: "Molecules/RegisterLabel",
  component: RegisterLabel,
} as Meta;

export const registerLabel: React.FC = () => {
  return <RegisterLabel label={text("label", "거래유형/가격")} />;
};
