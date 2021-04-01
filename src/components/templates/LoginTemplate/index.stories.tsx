import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { ILogin } from "../../../interfaces/Auth";
import LoginTemplate from "./index";

export default {
  title: "Templates/LoginTemplate",
  component: LoginTemplate,
} as Meta;

export const BasicLoginTemplate: React.FC = () => {
  const method = useForm<ILogin>();
  return (
    <FormProvider {...method}>
      <LoginTemplate onSubmit={action("onSubmit")} />
    </FormProvider>
  );
};
