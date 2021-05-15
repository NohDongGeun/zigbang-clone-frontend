import { Meta } from "@storybook/react";
import React from "react";
import NoSearch from ".";

export default {
  title: "Molecules/NoSearch",
  component: NoSearch,
} as Meta;

export const DetailNoSearch: React.FC = () => {
  return <NoSearch />;
};
