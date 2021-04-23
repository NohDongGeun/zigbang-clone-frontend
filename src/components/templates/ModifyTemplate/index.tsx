import React from "react";
import { FormProvider, useFormContext } from "react-hook-form";
import { AuthForm, AuthInput } from "../..";

interface IModify {
  onSubmit: () => void;
  message?: string;
}

const ModifyTemplate: React.FC<IModify> = ({ onSubmit, message, children }) => {
  const methods = useFormContext();
  const { handleSubmit } = methods;
  return (
    <div className={"h-screen w-screen flex items-center justify-center"}>
      <FormProvider {...methods}>
        <AuthForm
          label={"확인"}
          to={"/login"}
          onSubmit={handleSubmit(onSubmit)}
          message={message}
        >
          {children}
        </AuthForm>
      </FormProvider>
    </div>
  );
};

export default ModifyTemplate;
