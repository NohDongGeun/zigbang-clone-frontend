import { Meta } from "@storybook/react";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import UseFormInput from ".";

export default {
  title: "Atoms/UseFormInput",
  component: UseFormInput,
} as Meta;

export const EmailFormInput: React.FC = () => {
  const method = useForm();
  return (
    <FormProvider {...method}>
      <UseFormInput
        name={"email"}
        required
        registerOptions={{ required: true }}
        type={"email"}
      />
    </FormProvider>
  );
};

export const PasswordFormInput: React.FC = () => {
  const method = useForm();
  return (
    <FormProvider {...method}>
      <UseFormInput
        name={"password"}
        required
        registerOptions={{ required: true }}
        type={"password"}
      />
    </FormProvider>
  );
};
