import { gql, useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useHistory } from "react-router";
import AgencyRegisterTemplate from "../../../components/templates/AgencyProfile";
import { ME_QUERY } from "../../../hooks/useMe";
import {
  create_agency_mutation,
  create_agency_mutationVariables,
} from "../../../__generated__/create_agency_mutation";

export const CREATE_AGENCY_MUTATION = gql`
  mutation create_agency_mutation($createAgencyInput: CreateAgencyInput!) {
    createAgency(input: $createAgencyInput) {
      ok
      error
    }
  }
`;

const CreateAgency: React.FC = () => {
  const method = useForm({
    mode: "onChange",
  });
  const { getValues } = method;
  const [image, setImage] = useState<File>();
  const [prevImage, setPrevImage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const history = useHistory();

  const onCompleted = (data: create_agency_mutation) => {
    const {
      createAgency: { ok, error },
    } = data;

    if (ok) {
      alert("등록 되었습니다.");
      history.push("/agency");
    }
    if (error) {
      setErrorMessage(error);
    }
  };

  const [create_agency_mutation, { loading }] = useMutation<
    create_agency_mutation,
    create_agency_mutationVariables
  >(CREATE_AGENCY_MUTATION, { onCompleted });

  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const {
      target: { files },
    } = e;
    if (files) {
      const file = files[0];
      const reader = new FileReader();
      if (file) {
        reader.readAsDataURL(files[0]);
      }
      reader.onloadend = () => {
        if (reader.result) {
          setPrevImage(reader.result.toString());
          setImage(file);
        }
      };
    }
  };

  const onSubmit = async () => {
    const { image, name, agent, address } = getValues();
    const actualFile = image[0];
    const formBody = new FormData();
    const random = Math.floor(Math.random() * (9999 - 1000) + 1000).toString();
    const code = `agency/${Date.now() + random}`;

    formBody.append("id", code);
    formBody.append("files", actualFile);
    const { imagesPath: coverImg } = await (
      await fetch("http://localhost:4000/uploads/", {
        method: "POST",
        body: formBody,
      })
    ).json();

    if (coverImg) {
      return create_agency_mutation({
        variables: {
          createAgencyInput: {
            image: coverImg[0],
            name,
            agent,
            address,
          },
        },
        refetchQueries: [{ query: ME_QUERY }],
      });
    }
    return setErrorMessage("이미지를 등록해 주세요.");
  };

  return (
    <FormProvider {...method}>
      <AgencyRegisterTemplate
        src={prevImage}
        onSubmit={onSubmit}
        onChange={onChangeImage}
      />
    </FormProvider>
  );
};

export default CreateAgency;
