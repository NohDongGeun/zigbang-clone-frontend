import { Meta } from "@storybook/react";
import React from "react";
import Detail from ".";

export default {
  title: "Pages/Detail",
  component: Detail,
} as Meta;

export const BasicDetail: React.FC = () => {
  return <Detail />;
};
