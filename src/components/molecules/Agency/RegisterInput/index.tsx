import React, { useEffect, useState } from "react";
import { FormProvider, RegisterOptions, useFormContext } from "react-hook-form";
import { Input, Text, UseFormInput } from "../../..";

interface IAuthInputProps {
  placeholder: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isError: boolean;
}

const RegisterInput: React.FC<IAuthInputProps> = ({
  placeholder,
  name,
  label,
  value,
  onChange,
  isError = false,
}) => {
  return (
    <div
      className={`flex flex-row w-136 sm:w-200 mb-2 mr-2 even:mr-0 justify-end items-center border ${
        isError
          ? "border-red-700"
          : "border-gray-300 focus-within:border-gray-400"
      }`}
    >
      <Input
        className={
          "w-full h-42 px-2 text-gray-700 text-sm sm:text-base  text-start border-none outline-none focus:bg-white"
        }
        placeholder={placeholder}
        type={"number"}
        name={name}
        required
        onChange={onChange}
        value={value}
      />
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
