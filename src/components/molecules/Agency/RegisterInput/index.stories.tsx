import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs";
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
    <RegisterInput
      placeholder={"월세"}
      name={"rent"}
      label={"만원"}
      value={text("value", "")}
      onChange={action("onChange")}
      isError={boolean("isError", false)}
    />
  );
};
