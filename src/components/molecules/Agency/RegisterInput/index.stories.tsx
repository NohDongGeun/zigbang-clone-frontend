import { Meta } from "@storybook/react";
import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import RegisterInput from ".";

export default {
  title: "Molecules/RegisterInput",
  component: RegisterInput,
} as Meta;

export const PriceRegisterInput: React.FC = () => {
  const method = useForm();

  useEffect(() => {
    console.log(method.getValues());
  });
  return (
    <FormProvider {...method}>
      <RegisterInput
        placeholder={"월세"}
        name={"rent"}
        registerOptions={{ required: true }}
        label={"만원"}
      />
    </FormProvider>
  );
};