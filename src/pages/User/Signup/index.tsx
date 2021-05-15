import { gql, useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { authTokenVar, isLoggedInVar } from "../../../apollo";
import { SignupTemplate } from "../../../components";
import { LOCALSTORAGE_TOKEN } from "../../../constants/constants";
import { ME_QUERY } from "../../../hooks/useMe";
import { ISignup } from "../../../interfaces/Auth";
import {
  signupMutation,
  signupMutationVariables,
} from "../../../__generated__/signupMutation";

const SIGNUP_MUTATION = gql`
  mutation signupMutation($createAcountInput: CreateAccountInput!) {
    createAccount(input: $createAcountInput) {
      token
      ok
      error
    }
  }
`;

const Signup: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const method = useForm<ISignup>({
    mode: "onChange",
  });
  const history = useHistory();
  const { getValues } = method;
  const onCompleted = (data: signupMutation) => {
    const {
      createAccount: { ok, error, token },
    } = data;

    if (ok && token) {
      localStorage.setItem(LOCALSTORAGE_TOKEN, token);
      authTokenVar(token);
      isLoggedInVar(true);
      history.push("/my/auth/verify");
    }
    if (error) {
      setMessage(error);
    }
  };

  const [signupMutation, data] = useMutation<
    signupMutation,
    signupMutationVariables
  >(SIGNUP_MUTATION, { onCompleted });

  const onSubmit = () => {
    const { email, password, name } = getValues();
    signupMutation({
      variables: {
        createAcountInput: {
          email,
          password,
          name,
        },
      },
    });
  };

  return (
    <FormProvider {...method}>
      <SignupTemplate
        message={message}
        onSubmit={onSubmit}
        isFindEmail={false}
      />
    </FormProvider>
  );
};

export default Signup;
