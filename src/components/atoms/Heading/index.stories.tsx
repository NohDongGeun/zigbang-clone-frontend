import { select, text, withKnobs } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";
import Heading from "./index";

export default {
  title: "Atoms/Heading",
  component: Heading,
  decorators: [withKnobs],
} as Meta;

export const h1: React.FC = () => (
  <Heading
    label={text("label", "헤딩1")}
    className={text("className", "font-medium")}
    Type={"h1"}
  />
);

export const h2: React.FC = () => (
  <Heading
    label={text("label", "헤딩2")}
    className={text("className", "font-medium")}
    Type={"h2"}
  />
);

export const h3: React.FC = () => (
  <Heading
    label={text("label", "헤딩3")}
    className={text("className", "font-medium")}
    Type={"h3"}
  />
);

export const h4: React.FC = () => (
  <Heading
    label={text("label", "헤딩4")}
    className={text("className", "font-medium")}
    Type={"h4"}
  />
);

export const h5: React.FC = () => (
  <Heading
    label={text("label", "헤딩5")}
    className={text("className", "font-medium")}
    Type={"h5"}
  />
);
