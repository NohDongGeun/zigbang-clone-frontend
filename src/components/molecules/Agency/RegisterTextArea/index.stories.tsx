import { action } from "@storybook/addon-actions";
import { Meta } from "@storybook/react";
import React from "react";
import RegisterTextArea from ".";

export default {
  title: "Molecules/RegisterTextArea",
  component: RegisterTextArea,
} as Meta;

export const registerTextArea: React.FC = () => {
  return (
    <RegisterTextArea
      size={"basic"}
      isError={false}
      label={"최대6자/20자"}
      placeholder={"예)즉시입주,날짜협의,8월 28일 이후"}
      onChange={action("onChange")}
      name={"as"}
      value={"asd"}
    />
  );
};
