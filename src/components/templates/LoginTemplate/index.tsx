import React from "react";
import {
  AuthForm,
  AuthInput,
  AuthLink,
  ErrorMessage,
  Heading,
  Img,
  Text,
} from "../..";
import logo from "../../../assets/img/zigbang_logo.png";
import { FormProvider, useFormContext } from "react-hook-form";
import { ILogin } from "../../../interfaces/Auth";
import fontlogo from "../../../assets/img/fontlogo.png";
interface ILoginTemplate {
  onSubmit: () => void;
  message?: string;
}

const LoginTemplate: React.FC<ILoginTemplate> = ({ onSubmit, message }) => {
  const methods = useFormContext<ILogin>();
  const { handleSubmit } = methods;
  return (
    <div className={"h-screen w-screen flex items-center justify-center"}>
      <FormProvider {...methods}>
        <AuthForm
          label={"시작하기"}
          to={"/room"}
          onSubmit={handleSubmit(onSubmit)}
          message={message}
        >
          <div
            className={"flex flex-col pt-5 pb-8 justify-center items-center"}
          >
            <Img
              className={"w-28 h-12 mb-3"}
              src={fontlogo}
              alt={"홈으로 가기"}
            />
            <Text
              className={"text-xl font-light"}
              label={"간편하게 로그인하고"}
            />
            <Text
              className={"text-xl font-bold"}
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
            placeholder={"이메일주소"}
            name={"email"}
            type={"text"}
          />
          <AuthInput
            registerOptions={{
              required: { value: true, message: "비밀번호를 입력하세요" },
              min: { value: 8, message: "잘못된 비밀번호입니다" },
              max: { value: 16, message: "잘못된 비밀번호입니다" },
              pattern: {
                value: /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/,
                message: "잘못된 비밀번호입니다",
              },
            }}
            placeholder={"비밀번호"}
            name={"password"}
            type={"password"}
          />
          <AuthLink />
        </AuthForm>
      </FormProvider>
    </div>
  );
};
export default LoginTemplate;
