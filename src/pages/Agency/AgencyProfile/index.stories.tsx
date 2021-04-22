import { Meta } from "@storybook/react";
import React from "react";
import AgencyProfile from ".";

export default {
  title: "Pages/AgencyProfile",
  component: AgencyProfile,
} as Meta;

export const BasicDetail: React.FC = () => {
  return <AgencyProfile />;
};
