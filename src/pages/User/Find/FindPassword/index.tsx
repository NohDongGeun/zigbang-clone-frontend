import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { SignupTemplate } from "../../../../components";
import {
  findPasswordMutation,
  findPasswordMutationVariables,
} from "../../../../__generated__/findPasswordMutation";

const FIND_PASSWORD_MUTATION = gql`
  mutation findPasswordMutation($passwordEmailInput: PasswordEmailInput!) {
    passwordEmail(input: $passwordEmailInput) {
      ok
      error
    }
  }
`;

const FindPassword: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const history = useHistory();
  const method = useForm({
    mode: "onChange",
  });
  const { getValues } = method;
  const onCompleted = (data: findPasswordMutation) => {
    const {
      passwordEmail: { ok, error },
    } = data;
    if (ok) {
      alert("입력하신 이메일로 임시 비밀번호가 전송 되었습니다.");
      history.push("/login");
    }
    if (error) {
      setMessage(error);
    }
  };
  const [findPasswordMutation, { loading }] = useMutation<
    findPasswordMutation,
    findPasswordMutationVariables
  >(FIND_PASSWORD_MUTATION, { onCompleted });

  const onSubmit = () => {
    const { email } = getValues();
    if (!loading) {
      findPasswordMutation({
        variables: {
          passwordEmailInput: {
            email,
          },
        },
      });
    }
  };
  return (
    <FormProvider {...method}>
      <SignupTemplate
        message={message}
        onSubmit={onSubmit}
        isFindEmail={true}
      />
    </FormProvider>
  );
};

export default FindPassword;
