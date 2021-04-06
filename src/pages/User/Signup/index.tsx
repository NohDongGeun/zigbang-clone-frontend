import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { SignupTemplate } from "../../../components";
import { ISignup } from "../../../interfaces/Auth";

const Signup: React.FC = () => {
  const method = useForm<ISignup>({
    mode: "onChange",
  });
  const { getValues, errors } = method;

  const onSubmit = () => {
    //TODO :COMPLETE 시 토큰저장후 AUTH 페이지로 보내기
    const { email, password, passwordVerify } = getValues();
    console.log(email, password, passwordVerify);
  };
  return (
    <FormProvider {...method}>
      <SignupTemplate onSubmit={onSubmit} isFindEmail={false} />
    </FormProvider>
  );
};

export default Signup;
