import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";
import RegisterBtn from "./index";

export default {
  title: "Molecules/RegisterBtn",
  component: RegisterBtn,
} as Meta;

export const BRegisterBtn: React.FC = () => {
  return (
    <RegisterBtn
      isActive={boolean("isActive", false)}
      value={"oneRoom"}
      name={"dealType"}
      label={"포룸이상"}
      onClick={action("onClick")}
    />
  );
};
