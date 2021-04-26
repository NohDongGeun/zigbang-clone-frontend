import { Meta } from "@storybook/react";
import React from "react";
import Agency from ".";

export default {
  title: "Pages/AgencyHome",
  component: Agency,
} as Meta;

export const AgencyHome: React.FC = () => {
  return <Agency />;
};
