import { gql, useMutation } from "@apollo/client";
import React, { useCallback, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { AuthTemplate } from "../../../../components";
import {
  findIdMutation,
  findIdMutationVariables,
} from "../../../../__generated__/findIdMutation";

const FIND_ID_MUTATION = gql`
  mutation findIdMutation($findIdPhoneInput: FindIdPhoneInput!) {
    findIdPhone(input: $findIdPhoneInput) {
      ok
      error
    }
  }
`;

const FindId: React.FC = () => {
  const history = useHistory();
  const [message, setMessage] = useState<string>("");
  const method = useForm({
    mode: "onChange",
  });

  const onCompleted = (data: findIdMutation) => {
    const {
      findIdPhone: { ok, error },
    } = data;
    if (ok) {
      history.push("/login");
      alert("입력하신 휴대폰으로 이메일이 전송 되었습니다.");
    }
    if (error) {
      setMessage(error);
    }
  };
  const [findIdMutation, { loading }] = useMutation<
    findIdMutation,
    findIdMutationVariables
  >(FIND_ID_MUTATION, {
    onCompleted,
  });

  //휴대폰으로 이메일 전송해주기
  const onSubmit = () => {
    const { phone } = method.getValues();
    if (!loading) {
      findIdMutation({
        variables: {
          findIdPhoneInput: {
            phone,
          },
        },
      });
    }
  };

  return (
    <FormProvider {...method}>
      <AuthTemplate
        message={message}
        useButton={false}
        onSubmit={onSubmit}
        heading1={"가입 시 등록한 휴대폰으로"}
        heading2={"이메일이 전송됩니다."}
        label={"완료"}
        registerOptions={{ required: true }}
        name={"phone"}
        to={"/login"}
      />
    </FormProvider>
  );
};

export default FindId;
