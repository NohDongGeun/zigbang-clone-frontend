import { gql, useMutation } from "@apollo/client";
import React, { useCallback, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { AuthTemplate } from "../../../../components";
import { IAuth } from "../../../../interfaces/Auth";
import {
  verifyMutation,
  verifyMutationVariables,
} from "../../../../__generated__/verifyMutation";

const VERIFY_MUTATION = gql`
  mutation verifyMutation($createVerifyInput: CreateVerifyInput!) {
    createVerify(input: $createVerifyInput) {
      ok
      error
    }
  }
`;

const Auth: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const history = useHistory();
  const method = useForm<IAuth>({
    mode: "onChange",
  });

  //mutation 완료시
  const onCompletedSms = (data: verifyMutation) => {
    const {
      createVerify: { ok, error },
    } = data;
    if (ok) {
      history.push("/my/authNext");
    }
    if (error) {
      setMessage(error);
    }
  };

  const [verifyMutation, {loading }] = useMutation<
    verifyMutation,
    verifyMutationVariables
  >(VERIFY_MUTATION, { onCompleted: onCompletedSms });

  //휴대폰번호로 코드보내기
  const onSubmit = () => {
    if (!loading) {
      const { phone } = method.getValues();
      verifyMutation({
        variables: {
          createVerifyInput: {
            phone,
          },
        },
      });
    }
  };

  return (
    <FormProvider {...method}>
      <AuthTemplate
        useButton={true}
        onSubmit={onSubmit}
        heading1={"휴대폰 번호를 입력하시면"}
        heading2={"문의 시 더욱 편리하게 연결됩니다."}
        label={"다음"}
        to={"/login"}
        name={"phone"}
        message={message}
        registerOptions={{
          required: true,
        }}
      />
    </FormProvider>
  );
};

export default Auth;
