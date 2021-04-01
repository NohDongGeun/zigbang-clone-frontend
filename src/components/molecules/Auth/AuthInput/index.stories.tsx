import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";
import AuthInput from "./index";
import { FormProvider, useForm } from "react-hook-form";
import { ILogin } from "../../../../interfaces/Auth";

export default {
  title: "Molecules/AuthInput",
  component: AuthInput,
} as Meta;

export const PasswordInput: React.FC = () => {
  const methods = useForm<ILogin>({
    mode: "onChange",
  });

  return (
    <FormProvider {...methods}>
      <AuthInput
        registerOptions={{ required: true }}
        placeholder={text("placeholder", "비밀번호")}
        type={"password"}
        name={"password"}
      />
    </FormProvider>
  );
};

// export const emailInput: React.FC = () => (
//   <AuthInput
//     isPassword={boolean("isPassword", false)}
//     type={"email"}
//     value={"password"}
//     placeholder={"이메일"}
//     onChange={action("onChange")}
//     name={"email"}
//   />
// );
