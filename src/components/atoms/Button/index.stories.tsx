import React from "react";
import Button from "./index";
import { Meta } from "@storybook/react";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import { MemoryRouter } from "react-router-dom";
import { action } from "@storybook/addon-actions";

export default {
  title: "Atoms/Button",
  component: Button,
  decorators: [withKnobs],
} as Meta;

export const button: React.FC = () => (
  <Button
    label={text("label", "버튼")}
    className={text("className", "bg-yellow-300")}
    onClick={action("onClick")}
  />
);

export const link: React.FC = () => (
  <MemoryRouter>
    <Button
      label={text("label", "링크")}
      to={text("to", "/home")}
      className={text("className", "bg-yellow-300")}
    />
  </MemoryRouter>
);

export const actionButton: React.FC = () => (
  <Button
    label={text("label", "action")}
    unableClassName={text("unableClassName", "bg-grey-400 pointer-events-none")}
    className={text("className", "bg-yellow-300")}
    canClick={boolean("canClick", false)}
    onClick={action("onClick")}
  />
);
