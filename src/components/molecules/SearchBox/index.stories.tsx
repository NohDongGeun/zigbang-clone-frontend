import { boolean } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";
import { SearchBox } from "../..";

export default {
  title: "Molecules/SearchBox",
  component: SearchBox,
} as Meta;

export const LocationSearchBox: React.FC = () => {
  return <SearchBox loading={boolean("loading", false)} />;
};
