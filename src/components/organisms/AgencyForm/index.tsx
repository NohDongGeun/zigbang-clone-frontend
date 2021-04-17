import React from "react";
import { FormProvider, useFormContext } from "react-hook-form";
import { AuthForm, AuthInput } from "../..";
import AgencyImage from "../../molecules/Agency/AgencyImage";

interface IAgencyForm {
  onSubmit: () => void;
  src: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AgencyForm: React.FC<IAgencyForm> = ({ onSubmit, src, onChange }) => {
  const methods = useFormContext();
  const { handleSubmit } = methods;
  return (
    <div className={"h-screen w-screen flex items-center justify-center"}>
      <FormProvider {...methods}>
        <AuthForm
          label={"다음"}
          to={"/login"}
          onSubmit={handleSubmit(onSubmit)}
        >
          <AgencyImage src={src} className={"my-6 mx-auto"} />
          <AuthInput
            registerOptions={{
              required: true,
            }}
            placeholder={"부동산 이름"}
            name={"name"}
            type={"text"}
          />
          <AuthInput
            registerOptions={{
              required: true,
            }}
            placeholder={"대표 중개사 이름"}
            name={"agent"}
            type={"text"}
          />
          <AuthInput
            registerOptions={{
              required: true,
            }}
            placeholder={"주소"}
            name={"address"}
            type={"text"}
          />
          <label
            htmlFor={"agency_image"}
            className={
              "w-full p-2 border border-gray-300 cursor-pointer text-center"
            }
          >
            이미지 등록
            <input
              ref={methods.register({ required: true })}
              type={"file"}
              className={"hidden"}
              name={"image"}
              id={"agency_image"}
              onChange={onChange}
            ></input>
          </label>
        </AuthForm>
      </FormProvider>
    </div>
  );
};

export default AgencyForm;
