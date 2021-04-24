import { Meta } from "@storybook/react";
import React from "react";
import Loading from ".";

export default {
  title: "Atoms/Loading",
  component: Loading,
} as Meta;

export const BasicLoading: React.FC = () => {
  return <Loading />;
};
