import React, { useState } from "react";
import { Input, UseFormInput } from "../../..";
import Button from "../../../atoms/Button";
import {
  FormProvider,
  RegisterOptions,
  useFormContext,
  ValidationRule,
} from "react-hook-form";

interface IAuthInputProps {
  placeholder: string;
  name: string;
  registerOptions: RegisterOptions;
  type: "text" | "email" | "password";
}

const AuthInput: React.FC<IAuthInputProps> = ({
  placeholder,
  type,
  registerOptions,
  name,
}) => {
  const method = useFormContext();
  //비밀번호 보이기/숨기기
  const [hide, setHide] = useState<boolean>(true);

  const handleHide = () => {
    return setHide(!hide);
  };

  return (
    <div
      className={
        "flex flex-row justify-center items-center mb-2 border border-gray-300 rounded-sm focus-within:border-gray-400"
      }
    >
      {type === "password" ? (
        <>
          <FormProvider {...method}>
            <UseFormInput
              registerOptions={registerOptions}
              className={
                "w-full p-2 text-gray-700  text-start border-none outline-none focus:bg-white rounded-sm"
              }
              placeholder={placeholder}
              type={hide ? "password" : "text"}
              name={name}
              required={true}
            />
          </FormProvider>
          <Button
            type={"button"}
            className={"w-16 h-full p-2 text-xs font-semibold text-gray-500 "}
            label={hide ? "표시" : "숨김"}
            onClick={handleHide}
          />
        </>
      ) : (
        <FormProvider {...method}>
          <UseFormInput
            registerOptions={registerOptions}
            className={
              "w-full p-2 text-gray-700  text-start border-none outline-none focus:bg-white rounded-sm"
            }
            placeholder={placeholder}
            type={type}
            name={name}
            required={true}
          />
        </FormProvider>
      )}
    </div>
  );
};
export default AuthInput;
