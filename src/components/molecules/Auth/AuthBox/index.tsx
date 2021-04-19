import React from "react";
import { RegisterOptions } from "react-hook-form";
import { Button, UseFormInput } from "../../..";

interface IAuthBoxProps {
  name: string;
  registerOptions: RegisterOptions;
}

const AuthBox: React.FC<IAuthBoxProps> = ({
  name,
  registerOptions,
  children,
}) => {
  return (
    <div className={"flex flex-col justify-center items-center mt-4"}>
      <UseFormInput
        registerOptions={registerOptions}
        className={
          "w-3/4  text-center p-2  text-gray-700 text-xl border-b-2 border-gray-300 outline-none focus:bg-white "
        }
        type={"text"}
        name={name}
        required={true}
      ></UseFormInput>
      <div className={"flex w-full justify-end items-center mt-6"}>
        {children}
      </div>
    </div>
  );
};

export default AuthBox;
