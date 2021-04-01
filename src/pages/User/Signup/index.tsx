import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { SignupTemplate } from "../../../components";
import { ISignup } from "../../../interfaces/Auth";

const Signup: React.FC = () => {
  const method = useForm<ISignup>();
  const { getValues, errors } = method;

  const onSubmit = () => {
    const { email, password, passwordVerify } = getValues();
    console.log(email, password, passwordVerify);
  };
  return (
    <FormProvider {...method}>
      <SignupTemplate onSubmit={onSubmit} />
    </FormProvider>
  );
};

export default Signup;
