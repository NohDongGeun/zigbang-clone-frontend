import React from "react";
import { RegisterOptions, useFormContext } from "react-hook-form";
import { ITailwind } from "../../../interfaces/Tailwind";

interface IUseFormInputProps extends ITailwind {
  name: string;
  placeholder: string;
  required?: boolean;
  registerOptions: RegisterOptions;
  type: "text" | "email" | "password";
}

const UseFormInput: React.FC<IUseFormInputProps> = ({
  registerOptions,
  ...props
}) => {
  const { register } = useFormContext();
  return <input ref={register(registerOptions)} {...props}></input>;
};

export default React.memo(UseFormInput);
