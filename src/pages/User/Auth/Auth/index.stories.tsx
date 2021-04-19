import { Meta } from "@storybook/react";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import Auth from "./index";

export default {
  title: "Pages/Auth",
  component: Auth,
} as Meta;

export const PhoneAuth: React.FC = () => {
  const method = useForm({
    mode: "onChange",
  });
  return (
    <FormProvider {...method}>
      <Auth />
    </FormProvider>
  );
};
