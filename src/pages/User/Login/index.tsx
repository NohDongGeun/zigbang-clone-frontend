import { gql, useMutation } from "@apollo/client";
import React, { useCallback, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { authTokenVar, isLoggedInVar } from "../../../apollo";
import { useHistory } from "react-router-dom";
import LoginTemplate from "../../../components/templates/LoginTemplate";
import { LOCALSTORAGE_TOKEN } from "../../../constants/constants";
import { ILogin } from "../../../interfaces/Auth";
import {
  loginMutation,
  loginMutationVariables,
} from "../../../__generated__/loginMutation";
import { LOGIN_MUTATION } from "../../../hooks/useLogin";

const Login: React.FC = () => {
  //에러 메세지
  const [message, setMessage] = useState<string>("");
  const method = useForm<ILogin>({
    mode: "onChange",
  });
  const history = useHistory();
  const { getValues } = method;

  const onCompleted = (data: loginMutation) => {
    const {
      login: { ok, token, error },
    } = data;
    if (ok && token) {
      localStorage.setItem(LOCALSTORAGE_TOKEN, token);
      authTokenVar(token);
      isLoggedInVar(true);
      history.push("/room");
    }
    if (error) {
      setMessage(error);
    }
  };
  const [loginMutation, data] = useMutation<
    loginMutation,
    loginMutationVariables
  >(LOGIN_MUTATION, { onCompleted });

  // submit handler
  const onSubmit = () => {
    const { email, password } = getValues();
    loginMutation({
      variables: {
        loginInput: {
          email,
          password,
        },
      },
    });
  };
  return (
    <FormProvider {...method}>
      <LoginTemplate onSubmit={onSubmit} message={message} />
    </FormProvider>
  );
};

export default Login;
