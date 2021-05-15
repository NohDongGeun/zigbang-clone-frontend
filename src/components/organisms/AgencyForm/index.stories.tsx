import { action } from "@storybook/addon-actions";
import { Meta } from "@storybook/react";
import React from "react";
import AgencyForm from ".";

export default {
  title: "Organisms/AgencyForm",
  component: AgencyForm,
} as Meta;

export const BasicAgencyForm: React.FC = () => {
  return (
    <AgencyForm
      onChange={action("onChange")}
      onSubmit={action("onSubmit")}
      src={""}
    />
  );
};
