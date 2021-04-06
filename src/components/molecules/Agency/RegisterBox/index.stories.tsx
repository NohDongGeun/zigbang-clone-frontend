import { text } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";
import RegisterBox from ".";

export default {
  title: "Molecules/RegisterBox",
  component: RegisterBox,
} as Meta;

export const registerBox: React.FC = () => {
  return <RegisterBox label={text("label", "위치")} />;
};
