import React from "react";
import { Text, UseFormInput } from "../../..";
import { FormProvider, RegisterOptions, useFormContext } from "react-hook-form";

interface IAuthInputProps {
  placeholder: string;
  name: string;
  registerOptions: RegisterOptions;
  label: string;
}

const RegisterInput: React.FC<IAuthInputProps> = ({
  placeholder,
  registerOptions,
  name,
  label,
}) => {
  const method = useFormContext();

  return (
    <div
      className={
        "flex flex-row w-136 sm:w-200 mb-2 mr-2 even:mr-0 justify-end items-center border border-gray-300 focus-within:border-gray-400"
      }
    >
      <FormProvider {...method}>
        <UseFormInput
          registerOptions={registerOptions}
          className={
            "w-full h-42 px-2 text-gray-700 text-sm sm:text-base  text-start border-none outline-none focus:bg-white"
          }
          placeholder={placeholder}
          type={"text"}
          name={name}
          required={true}
        />
      </FormProvider>
      <Text
        label={label}
        className={
          "flex justify-end items-center w-16 h-full p-2 text-xs font-semibold text-gray-500 "
        }
      />
    </div>
  );
};
export default RegisterInput;
