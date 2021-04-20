import { gql, useMutation, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { phoneQuery } from "../../../../__generated__/phoneQuery";
import { useMe } from "../../../../hooks/useMe";
import {
  phoneMutation,
  phoneMutationVariables,
} from "../../../../__generated__/phoneMutation";
import { FormProvider, useForm } from "react-hook-form";
import { IAuth, IAuthNext } from "../../../../interfaces/Auth";
import { AuthTemplate } from "../../../../components";
import { useHistory } from "react-router";

//코드 검사
const PHONE_MUTATION = gql`
  mutation phoneMutation($verifyUserInput: VerifyUserInput!) {
    verifyPhone(input: $verifyUserInput) {
      ok
      error
    }
  }
`;

//verify에 유저의 핸드폰 번호 찾기
const PHONE_QUERY = gql`
  query phoneQuery {
    findPhone {
      phone
    }
  }
`;

const AuthNext: React.FC = () => {
  const [message, setMessage] = useState<string>();
  const history = useHistory();
  const { data } = useQuery<phoneQuery>(PHONE_QUERY);
  const method = useForm<IAuthNext>({
    mode: "onChange",
  });

  //mutation 완료시
  const onCompletedVerify = (data: phoneMutation) => {
    const {
      verifyPhone: { ok, error },
    } = data;
    if (ok) {
      history.push("/room");
    }
    if (error) {
      setMessage(error);
    }
  };
  const [phoneMutation, { loading }] = useMutation<
    phoneMutation,
    phoneMutationVariables
  >(PHONE_MUTATION, { onCompleted: onCompletedVerify });

  //submit handler
  const onSubmit = () => {
    if (!loading) {
      const { code } = method.getValues();
      phoneMutation({
        variables: {
          verifyUserInput: {
            code,
          },
        },
      });
    }
  };

  return (
    <>
      {data?.findPhone.phone ? (
        <FormProvider {...method}>
          <AuthTemplate
            useButton={true}
            message={message}
            onSubmit={onSubmit}
            heading1={`${data.findPhone.phone}으로 전송된`}
            heading2={"4자리 숫자를 입력해주세요."}
            label={"완료"}
            to={"/Auth"}
            name={"code"}
            registerOptions={{
              required: true,
              pattern: /^[0-9]/g,
            }}
          />
        </FormProvider>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default AuthNext;
