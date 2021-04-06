import React from "react";
import { useFormContext, FormProvider } from "react-hook-form";
import { AuthForm, AuthInput } from "../..";

interface IAgencyRegister {
  onSubmit: () => void;
}

const AgencyRegisterTemplate: React.FC<IAgencyRegister> = ({ onSubmit }) => {
  const methods = useFormContext();
  const { handleSubmit } = methods;
  return (
    <div className={"h-screen w-screen flex items-center justify-center"}>
      <FormProvider {...methods}>
        <AuthForm
          label={"다음"}
          to={"/login"}
          onSubmit={handleSubmit(onSubmit)}
        >
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
              required: { value: true, message: "이름을 입력하세요" },
              min: { value: 2, message: "잘못된 이름입니다." },
              max: { value: 8, message: "잘못된 이름입니다." },
            }}
            placeholder={"이름"}
            name={"name"}
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
        </AuthForm>
      </FormProvider>
    </div>
  );
};

export default AgencyRegisterTemplate;
