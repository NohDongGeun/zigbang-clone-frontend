import React from "react";
import { text, withKnobs } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import Text from "./index";

export default {
  title: "Atoms/Text",
  component: Text,
  decorators: [withKnobs],
} as Meta;

export const basicText: React.FC = () => (
  <Text
    label={text("label", "text")}
    className={text("className", "text-3xl")}
  />
);
