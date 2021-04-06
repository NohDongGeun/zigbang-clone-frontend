import { Meta } from "@storybook/react";
import React from "react";
import NotAgencyBox from "./index";

export default {
  title: "Molecules/NotAgencyBox",
  component: NotAgencyBox,
} as Meta;

export const registerBox: React.FC = () => {
  return <NotAgencyBox />;
};
