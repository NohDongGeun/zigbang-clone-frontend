import { gql, useMutation } from "@apollo/client";
import React, { useEffect, useRef, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { AuthInput, ModifyTemplate, Text } from "../../../../../components";
import { useMeLazy, ME_QUERY } from "../../../../../hooks/useMe";
import {
  editProfileMutation,
  editProfileMutationVariables,
} from "../../../../../__generated__/editProfileMutation";

export const EDIT_PROFILE_MUTATION = gql`
  mutation editProfileMutation($editProfileInput: EditProfileInput!) {
    editProfile(input: $editProfileInput) {
      ok
      error
    }
  }
`;

const ModifyName: React.FC = () => {
  const { data, meQuery } = useMeLazy();
  const unmount = useRef(false);
  const history = useHistory();
  const [message, setMessage] = useState<string>("");

  // Can't perform a React state update on an unmounted component.
  useEffect(() => {
    if (unmount.current === false) {
      meQuery();
    }
    return () => {
      unmount.current = true;
    };
  }, []);

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
  const method = useForm<{ name: string }>({
    mode: "onChange",
  });

  const onSubmit = () => {
    const { name } = method.getValues();
    if (!loading) {
      editProfileMutation({
        variables: {
          editProfileInput: {
            name,
          },
        },
        refetchQueries: [{ query: ME_QUERY }],
      });
    }
  };
  return (
    <>
      {data && (
        <FormProvider {...method}>
          <ModifyTemplate onSubmit={onSubmit} message={message}>
            <Text className={"my-3"} label={"이름"} />
            <AuthInput
              placeholder={data?.me.name}
              registerOptions={{ required: true }}
              name={"name"}
              type={"text"}
            />
          </ModifyTemplate>
        </FormProvider>
      )}
    </>
  );
};

export default ModifyName;
