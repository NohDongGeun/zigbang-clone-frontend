import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { SideLoginForm } from "../..";

export default {
  title: "Organisms/SideLoginForm",
  component: SideLoginForm,
} as Meta;

export const SideLogin: React.FC = () => {
  const method = useForm();
  return (
    <FormProvider {...method}>
      <SideLoginForm
        onSubmit={action("onSubmit")}
        error={text("error", "")}
        loading={boolean("boolean", false)}
      />
    </FormProvider>
  );
};
