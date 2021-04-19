import { Meta } from "@storybook/react";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import FindId from "./index";

export default {
  title: "Pages/FindId",
  component: FindId,
} as Meta;

export const BasicFindID: React.FC = () => {
  const method = useForm({
    mode: "onChange",
  });
  return (
    <FormProvider {...method}>
      <FindId />
    </FormProvider>
  );
};
