import { text } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";
import AgencyImage from ".";

export default {
  title: "Molecules/AgencyImage",
  component: AgencyImage,
} as Meta;

export const BasicAgencyImage: React.FC = () => {
  return <AgencyImage src={text("src", "asd")} />;
};
