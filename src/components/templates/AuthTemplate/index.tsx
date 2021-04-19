import React from "react";
import { FormProvider, RegisterOptions, useFormContext } from "react-hook-form";
import { AuthBox, AuthForm, Button, Text } from "../..";

interface IAuthTemplate {
  onSubmit: () => void;
  heading1: string;
  heading2: string;
  registerOptions: RegisterOptions;
  name: string;
  to: string;
  label: string;
  message?: string;
  useButton: boolean;
}

const AuthTemplate: React.FC<IAuthTemplate> = ({
  onSubmit,
  heading1,
  heading2,
  registerOptions,
  name,
  to,
  label,
  message,
  useButton = true,
}) => {
  const methods = useFormContext();
  const { handleSubmit } = methods;
  return (
    <div className={"h-screen w-screen flex items-center justify-center"}>
      <FormProvider {...methods}>
        <AuthForm
          message={message}
          label={label}
          to={to}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div
            className={"flex flex-col  pt-5 pb-8 justify-center items-center"}
          >
            <Text className={"text-base"} label={heading1} />
            <Text className={"text-base "} label={heading2} />
          </div>
          <AuthBox name={name} registerOptions={registerOptions}>
            {useButton && (
              <Button
                to={"/room"}
                label={"나중에하기"}
                className={
                  "border-b border-gray-400 text-xs text-gray-400 font-semibold"
                }
              />
            )}
          </AuthBox>
        </AuthForm>
      </FormProvider>
    </div>
  );
};

export default AuthTemplate;
