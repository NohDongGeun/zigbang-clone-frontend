import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import AgencyRegisterTemplate from "../../../components/templates/AgencyProfile";

const CreateAgency: React.FC = () => {
  const method = useForm({
    mode: "onChange",
  });
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

  const onSubmit = async () => {
    const { image } = getValues();
    const actualFile = image[0];
    const formBody = new FormData();
    formBody.append("files", actualFile);
    const { imagesPath: coverImg } = await (
      await fetch("http://localhost:4000/uploads/", {
        method: "POST",
        body: formBody,
      })
    ).json();
    console.log(coverImg);
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
