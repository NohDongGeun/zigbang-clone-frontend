import { Meta } from "@storybook/react";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import Login from ".";
import { ILogin } from "../../../interfaces/Auth";

export default {
  title: "Pages/Login",
  component: Login,
} as Meta;

export const UserLogin: React.FC = () => {
  const method = useForm<ILogin>();
  return (
    <FormProvider {...method}>
      <Login />
    </FormProvider>
  );
};
