import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { authTokenVar, isLoggedInVar } from "../apollo";
import { LOCALSTORAGE_TOKEN } from "../constants/constants";
import {
  loginMutation,
  loginMutationVariables,
} from "../__generated__/loginMutation";

export const LOGIN_MUTATION = gql`
  mutation loginMutation($loginInput: LoginInput!) {
    login(input: $loginInput) {
      ok
      error
      token
    }
  }
`;

export const useLogin = (email: string, password: string) => {
  const history = useHistory();
  const [error, setError] = useState<string>("");
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
      setError(error);
    }
  };
  const [loginMutation, { loading, data }] = useMutation<
    loginMutation,
    loginMutationVariables
  >(LOGIN_MUTATION, { onCompleted });

  return { loginMutation, data, error, loading };
};
