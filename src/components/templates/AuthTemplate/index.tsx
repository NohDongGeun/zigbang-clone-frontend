import React from "react";
import { FormProvider, useFormContext } from "react-hook-form";
import { AuthBox, AuthForm, Button, Text } from "../..";

interface IAuthTemplate {
  onSubmit: () => void;
  isChecked: boolean;
  onClick: () => void;
  label1: string;
  label2: string;
}

const AuthTemplate: React.FC<IAuthTemplate> = ({
  onSubmit,
  isChecked,
  onClick,
  label1,
  label2,
}) => {
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
          <div
            className={"flex flex-col  pt-5 pb-8 justify-center items-center"}
          >
            <Text className={"text-base"} label={label1} />
            <Text className={"text-base "} label={label2} />
          </div>
          {isChecked ? (
            <AuthBox
              name={"code"}
              registerOptions={{
                required: "올바른 코드가 아닙니다",
                min: 4,
                max: 4,
              }}
            >
              <Button
                type={"button"}
                onClick={onClick}
                label={"나중에하기"}
                className={
                  "border-b border-gray-400 text-xs text-gray-400 font-semibold"
                }
              />
            </AuthBox>
          ) : (
            <AuthBox
              name={"phone"}
              registerOptions={{
                required: "올바른 휴대폰 번호가 아닙니다",
                pattern: /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/g,
              }}
            >
              <Button
                to={"/room"}
                label={"나중에하기"}
                className={
                  "border-b border-gray-400 text-xs text-gray-400 font-semibold"
                }
              />
            </AuthBox>
          )}
        </AuthForm>
      </FormProvider>
    </div>
  );
};

export default AuthTemplate;
