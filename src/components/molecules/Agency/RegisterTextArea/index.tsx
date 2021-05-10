import React, { ChangeEventHandler, useEffect } from "react";
import { FormProvider, RegisterOptions, useFormContext } from "react-hook-form";
import { Text } from "../../..";

interface IRegisterTextArea {
  label: string;
  placeholder: string;
  isError: boolean;
  size: "big" | "basic";
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  name: string;
  value: string;
}

const RegisterTextArea: React.FC<IRegisterTextArea> = ({
  placeholder,
  label,
  isError,
  onChange,
  size,
  name,
  value,
}) => {
  return (
    <div
      className={`${
        (size === "big" && "h-184") || (size === "basic" && "h-92")
      } flex flex-col border w-full   ${
        isError ? "border-red-700" : "border-gray-300"
      } p-2`}
    >
      <textarea
        name={name}
        className={
          "w-full flex-auto outline-none resize-none overflow-y-auto text-sm sm:text-base "
        }
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      ></textarea>
      <Text
        className={"flex justify-end items-end text-xs text-gray-400 "}
        label={label}
      />
    </div>
  );
};

export default RegisterTextArea;
