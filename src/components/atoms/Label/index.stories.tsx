import { text, withKnobs } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";
import Label from "./index";

export default {
  title: "Atoms/Label",
  component: Label,
  decorators: [withKnobs],
} as Meta;

export const emailLabel: React.FC = () => (
  <Label
    label={text("label", "이메일")}
    className={text("className", "text-2xl")}
  />
);
