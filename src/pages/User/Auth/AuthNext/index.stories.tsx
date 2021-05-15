import { Meta } from "@storybook/react";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import AuthNext from ".";

export default {
  title: "Pages/AuthNext",
  component: AuthNext,
} as Meta;

export const AuthCode: React.FC = () => {
  const method = useForm({
    mode: "onChange",
  });

  return (
    <FormProvider {...method}>
      <AuthNext />
    </FormProvider>
  );
};
