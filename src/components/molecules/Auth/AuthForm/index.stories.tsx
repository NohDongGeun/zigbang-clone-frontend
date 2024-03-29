import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { ILogin } from "../../../../interfaces/Auth";
import AuthInput from "../AuthInput";
import LoginForm from "./index";

export default {
  title: "Molecules/LoginForm",
  component: LoginForm,
} as Meta;

export const LoginBox: React.FC = () => {
  const methods = useForm<ILogin>({
    mode: "onChange",
  });
  return (
    <FormProvider {...methods}>
      <LoginForm to={"/room"} onSubmit={action("onSubmit")} label={"시작하기"}>
        <AuthInput
          type={"password"}
          registerOptions={{ required: true }}
          placeholder={text("placeholder", "비밀번호")}
          name={"password"}
        />
        <AuthInput
          type={"password"}
          registerOptions={{ required: true }}
          placeholder={text("placeholder", "비밀번호")}
          name={"password"}
        />
      </LoginForm>
    </FormProvider>
  );
};
