import React, { useEffect } from "react";
import { FormProvider, useFormContext } from "react-hook-form";
import {
  AuthLink,
  Button,
  ErrorMessage,
  Heading,
  Loading,
  UseFormInput,
} from "../..";

interface ISideLoginForm {
  onSubmit: () => void;
  error: string;
  loading: boolean;
}

const SideLoginForm: React.FC<ISideLoginForm> = ({
  onSubmit,
  error,
  loading,
}) => {
  const methods = useFormContext<{ name: string; password: string }>();
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={"p-6 flex flex-col"}
      >
        <Heading
          className={"text-center pb-5 text-2xl font-bold text-gray-500"}
          Type={"h1"}
          label={"Sign In"}
        />
        <div className={"p-3 bg-gray-200 rounded-xl mb-3"}>
          <UseFormInput
            type={"text"}
            className={"bg-transparent outline-none w-full text-base"}
            name={"email"}
            registerOptions={{
              required: true,
              pattern: {
                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "이메일 주소를 다시 확인해 주세요",
              },
            }}
            placeholder={"E-mail"}
          />
        </div>
        <div className={"p-3 bg-gray-200 rounded-xl mb-3"}>
          <UseFormInput
            type={"password"}
            className={"bg-transparent outline-none w-full text-base"}
            name={"password"}
            registerOptions={{
              required: true,
              pattern: {
                value: /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/,
                message: "잘못된 비밀번호입니다",
              },
            }}
            placeholder={"Password"}
          />
        </div>
        <AuthLink />
        {error && <ErrorMessage message={error} />}
        <div className={"flex flex-1 justify-end items-center mt-3"}>
          <Button
            type={"submit"}
            className={`p-3 bg-gray-200 text-lg flex-1 rounded-xl font-semibold ${
              methods.formState.isValid
                ? "text-white bg-eroom"
                : "text-gray-700 bg-gray-300 pointer-events-none"
            }`}
            label={loading ? "Loading..." : "시작하기"}
          />
        </div>
      </form>
    </FormProvider>
  );
};

export default SideLoginForm;
