import React, { useCallback, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Text } from "../../../components";
import LoginTemplate from "../../../components/templates/LoginTemplate";
import { ILogin } from "../../../interfaces/Auth";

const Login: React.FC = () => {
  const method = useForm<ILogin>();
  const { getValues, errors } = method;

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  const onSubmit = () => {
    //todo:apollo login mutation with getvalues()
    console.log(getValues().email);
    console.log(errors.email?.message);
  };
  return (
    <FormProvider {...method}>
      <LoginTemplate onSubmit={onSubmit} />
    </FormProvider>
  );
};
export default Login;
