import { Meta } from "@storybook/react";
import React from "react";
import NoDetail from ".";

export default {
  title: "Molecules/NoDetail",
  component: NoDetail,
} as Meta;

export const noDetail: React.FC = () => {
  return <NoDetail />;
};
