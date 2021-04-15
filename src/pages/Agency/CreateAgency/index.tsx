import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import AgencyRegisterTemplate from "../../../components/templates/AgencyProfile";

const CreateAgency: React.FC = () => {
  const method = useForm();
  const { getValues } = method;
  const [image, setImage] = useState<File>();
  const [prevImage, setPrevImage] = useState<string>("");

  useEffect(() => {
    console.log(prevImage);
  }, [prevImage]);

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

  const onSubmit = () => {
    const { name } = getValues();
    console.log(name);
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
