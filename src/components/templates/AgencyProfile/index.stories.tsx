import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import AgencyRegisterTemplate from ".";

export default {
  title: "Templates/AgencyRegisterTemplate",
  component: AgencyRegisterTemplate,
} as Meta;

export const AgencyRegister: React.FC = () => {
  const method = useForm();
  return (
    <FormProvider {...method}>
      <AgencyRegisterTemplate
        src={text("src", "asd")}
        onSubmit={action("onSubmit")}
        onChange={action("onChange")}
      />
    </FormProvider>
  );
};
