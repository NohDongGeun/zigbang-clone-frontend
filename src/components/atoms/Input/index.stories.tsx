import { action } from "@storybook/addon-actions";
import { text, withKnobs } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";
import Input from "./index";

export default {
  title: "Atoms/Input",
  component: Input,
  decorators: [withKnobs],
} as Meta;

export const checkbox: React.FC = () => (
  <Input
    type={"checkbox"}
    className={text("className", "rounded-xl")}
    placeholder={text("placeholder", "이메일을 입력하세요")}
    onChange={action("onChage")}
  />
);

export const radio: React.FC = () => (
  <Input
    type={"radio"}
    className={text("className", "rounded-xl")}
    placeholder={text("placeholder", "비밀번호를 입력하세요")}
    onChange={action("onChage")}
  />
);
