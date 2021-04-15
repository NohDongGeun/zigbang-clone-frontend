import { Meta } from "@storybook/react";
import React from "react";
import CreateAgency from ".";

export default {
  title: "Pages/CreateAgency",
  component: CreateAgency,
} as Meta;

export const BasicCreateAgency: React.FC = () => {
  return <CreateAgency />;
};
