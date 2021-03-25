import { boolean, text } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";
import Header from ".";

export default {
  title: "Organisms/Header",
  components: Header,
} as Meta;

export const header: React.FC = () => {
  return <Header logged={boolean("logged", true)} name={text("name", "sam")} />;
};
