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
              required: { value: true, message: "이메일을 입력하세요" },
            }}
            placeholder={"부동산 이름"}
            name={"name"}
            type={"text"}
          />
          <AuthInput
            registerOptions={{
              required: { value: true, message: "이름을 입력하세요" },
              min: { value: 2, message: "잘못된 이름입니다." },
              max: { value: 10, message: "잘못된 이름입니다." },
            }}
            placeholder={"대표 중개사 이름"}
            name={"agent"}
            type={"text"}
          />
          <AuthInput
            registerOptions={{
              required: { value: true, message: "주소를 입력하세요" },
              min: { value: 8, message: "잘못된 주소입니다" },
              max: { value: 16, message: "잘못된 주소입니다" },
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
              type={"file"}
              className={"hidden"}
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
