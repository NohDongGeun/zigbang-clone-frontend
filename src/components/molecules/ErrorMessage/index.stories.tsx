import { text } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";
import ErrorMessage from "./index";

export default {
  title: "Molecules/ErrorMessage",
  component: ErrorMessage,
} as Meta;

export const BasicErrorMessage: React.FC = () => {
  return <ErrorMessage message={text("message", "다시 입력해주세요")} />;
};
