import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { AuthInput, ModifyTemplate, Text } from "../../../../../components";
import {
  editProfileMutation,
  editProfileMutationVariables,
} from "../../../../../__generated__/editProfileMutation";
import { EDIT_PROFILE_MUTATION } from "../ModifyName";

const ModifyPassword: React.FC = () => {
  const history = useHistory();
  const [message, setMessage] = useState<string>("");
  const method = useForm({
    mode: "onChange",
  });
  const onCompleted = (data: editProfileMutation) => {
    const {
      editProfile: { ok, error },
    } = data;
    if (ok) {
      alert("변경되었습니다");
      history.goBack();
    }
    if (error) {
      setMessage(error);
    }
  };
  const [editProfileMutation, { loading }] = useMutation<
    editProfileMutation,
    editProfileMutationVariables
  >(EDIT_PROFILE_MUTATION, { onCompleted });

  const onSubmit = () => {
    const { password, newPassword } = method.getValues();
    if (!loading) {
      editProfileMutation({
        variables: {
          editProfileInput: {
            password,
            newPassword,
          },
        },
      });
    }
  };

  return (
    <FormProvider {...method}>
      <ModifyTemplate onSubmit={onSubmit} message={message}>
        <Text className={"my-3"} label={"현재 비밀번호"} />
        <AuthInput
          placeholder={"현재 비밀번호를 입력해주세요"}
          registerOptions={{ required: true }}
          name={"password"}
          type={"password"}
        />
        <Text className={"my-3"} label={"새로운 비밀번호"} />
        <AuthInput
          placeholder={"영문,숫자,특수문자 포함 8자이상"}
          registerOptions={{ required: true }}
          name={"newPassword"}
          type={"password"}
        />
        <AuthInput
          placeholder={"영문,숫자,특수문자 포함 8자이상"}
          registerOptions={{ required: true }}
          name={"newPasswordVerify"}
          type={"password"}
        />
      </ModifyTemplate>
    </FormProvider>
  );
};

export default ModifyPassword;
