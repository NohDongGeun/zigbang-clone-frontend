import { Meta } from "@storybook/react";
import React from "react";
import AgencyMainTemplate from ".";

export default {
  title: "Templates/AgencyMainTemplate",
  component: AgencyMainTemplate,
} as Meta;

export const agencyRegister: React.FC = () => {
  return <AgencyMainTemplate />;
};
