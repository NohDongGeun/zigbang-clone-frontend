import React from "react";
import { FormProvider, useFormContext } from "react-hook-form";
import { AuthForm, AuthInput, Text } from "../..";
import { ISignup } from "../../../interfaces/Auth";

interface ISignupTemplate {
  onSubmit: () => void;
}

const SignupTemplate: React.FC<ISignupTemplate> = ({ onSubmit }) => {
  const methods = useFormContext<ISignup>();
  const { handleSubmit, watch } = methods;

  return (
    <div className={"h-screen w-screen flex items-center justify-center"}>
      <FormProvider {...methods}>
        <AuthForm
          label={"다음"}
          to={"/login"}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div
            className={"flex flex-col  pt-5 pb-8 justify-center items-center"}
          >
            <Text className={"text-base"} label={"간편하게 로그인하고"} />
            <Text
              className={"text-base "}
              label={"다양한 서비스를 이용하세요."}
            />
          </div>
          <AuthInput
            registerOptions={{
              required: { value: true, message: "이메일을 입력하세요" },
              pattern: {
                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "이메일 주소를 다시 확인해 주세요",
              },
            }}
            placeholder={"이메일 주소"}
            name={"email"}
            type={"text"}
          />
          <AuthInput
            registerOptions={{
              required: { value: true, message: "비밀번호를 입력하세요" },
              min: { value: 8, message: "잘못된 비밀번호입니다" },
              max: { value: 16, message: "잘못된 비밀번호입니다" },
              pattern: {
                value: /^[A-Za-z0-9]{8,16}$/,
                message: "잘못된 비밀번호입니다",
              },
            }}
            placeholder={"영문,숫자 포함 8자 이상"}
            name={"password"}
            type={"password"}
          />
          <AuthInput
            registerOptions={{
              required: { value: true, message: "비밀번호를 입력하세요" },
              validate: (value) =>
                value === watch("password") ||
                "입력한 비밀번호가 서로 다릅니다",
            }}
            placeholder={"비밀번호 재입력"}
            name={"passwordVerify"}
            type={"password"}
          />
        </AuthForm>
      </FormProvider>
    </div>
  );
};

export default SignupTemplate;
