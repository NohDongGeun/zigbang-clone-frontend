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

export const email: React.FC = () => (
  <Input
    type={"email"}
    className={text("className", "rounded-xl")}
    placeholder={text("placeholder", "이메일을 입력하세요")}
    onChange={action("onChage")}
  />
);

export const password: React.FC = () => (
  <Input
    type={"password"}
    className={text("className", "rounded-xl")}
    placeholder={text("placeholder", "비밀번호를 입력하세요")}
    onChange={action("onChage")}
  />
);

export const search: React.FC = () => (
  <Input
    type={"text"}
    className={text("className", "rounded-xl")}
    placeholder={text("placeholder", "입력하세요")}
    onChange={action("onChage")}
  />
);
