import { action } from "@storybook/addon-actions";
import React from "react";
import { useFormContext, FormProvider } from "react-hook-form";
import { AuthForm, AuthInput } from "../..";
import AgencyForm from "../../organisms/AgencyForm";

interface IAgencyRegister {
  onSubmit: () => void;
  src: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AgencyRegisterTemplate: React.FC<IAgencyRegister> = ({
  src,
  onSubmit,
  onChange,
}) => {
  const methods = useFormContext();
  const { handleSubmit } = methods;
  return (
    <div className={"h-screen w-screen flex items-center justify-center"}>
      <FormProvider {...methods}>
        <AgencyForm onSubmit={onSubmit} src={src} onChange={onChange} />
      </FormProvider>
    </div>
  );
};

export default AgencyRegisterTemplate;
