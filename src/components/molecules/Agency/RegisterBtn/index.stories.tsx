import { action } from "@storybook/addon-actions";
import { Meta } from "@storybook/react";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import RegisterBtn from "./index";

export default {
  title: "Molecules/RegisterBtn",
  component: RegisterBtn,
} as Meta;

export const BRegisterBtn: React.FC = () => {
  const method = useForm();
  return (
    <FormProvider {...method}>
      <RegisterBtn
        value={"oneRoom"}
        name={"dealType"}
        label={"포룸이상"}
        registerOptions={{ required: true }}
        onClick={action("onClick")}
      />
    </FormProvider>
  );
};
