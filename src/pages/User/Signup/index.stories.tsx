import { action } from "@storybook/addon-actions";
import { Meta } from "@storybook/react";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import Signup from ".";
import { ISignup } from "../../../interfaces/Auth";

export default {
  title: "Pages/Signup",
  component: Signup,
} as Meta;

export const UserSignup: React.FC = () => {
  const method = useForm<ISignup>();
  return (
    <FormProvider {...method}>
      <Signup />
    </FormProvider>
  );
};
