import { Meta } from "@storybook/react";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import FindPassword from "./index";

export default {
  title: "Pages/FindPassword",
  component: FindPassword,
} as Meta;

export const BasicFindPassword: React.FC = () => {
  const method = useForm({
    mode: "onChange",
  });
  return (
    <FormProvider {...method}>
      <FindPassword />
    </FormProvider>
  );
};
