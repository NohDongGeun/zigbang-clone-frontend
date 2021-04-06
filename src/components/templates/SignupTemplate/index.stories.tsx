import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import SignupTemplate from "./index";

export default {
  title: "Templates/SignupTemplate",
  component: SignupTemplate,
} as Meta;

export const BasicSignupTemplate: React.FC = () => {
  const method = useForm();
  return (
    <FormProvider {...method}>
      <SignupTemplate
        onSubmit={action("onSubmit")}
        isFindEmail={boolean("isFindEmail", false)}
      />
    </FormProvider>
  );
};
