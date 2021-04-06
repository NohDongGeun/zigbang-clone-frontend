import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { SignupTemplate } from "../../../components";

const FindPassword: React.FC = () => {
  const method = useForm({
    mode: "onChange",
  });
  const { getValues, errors } = method;

  const onSubmit = () => {
    //TODO :COMPLETE 시 로그인페이지로 보내기
    const { email } = getValues();
    console.log(email);
  };
  return (
    <FormProvider {...method}>
      <SignupTemplate onSubmit={onSubmit} isFindEmail={true} />
    </FormProvider>
  );
};

export default FindPassword;
