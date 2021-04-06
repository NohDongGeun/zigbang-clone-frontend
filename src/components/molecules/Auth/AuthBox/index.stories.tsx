import { boolean } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import AuthBox from ".";

export default {
  title: "Molecules/AuthBox",
  component: AuthBox,
} as Meta;

export const PhoneAuthBox: React.FC = () => {
  const method = useForm({
    mode: "onChange",
  });
  return (
    <FormProvider {...method}>
      <AuthBox
        registerOptions={{ required: true }}
        name={"phone"}
      />
    </FormProvider>
  );
};
