import { number } from "@storybook/addon-knobs";
import React from "react";
import { RegisterOptions, useFormContext } from "react-hook-form";
import { ITailwind } from "../../../interfaces/Tailwind";

export interface IUseFormBtnProps extends ITailwind {
  name: string;
  registerOptions: RegisterOptions;
  value?: string | number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  label?: string;
}

const UseFormBtn: React.FC<IUseFormBtnProps> = ({
  registerOptions,
  label,
  ...props
}) => {
  const { register } = useFormContext();
  return (
    <button ref={register(registerOptions)} type={"button"} {...props}>
      {label}
    </button>
  );
};
export default UseFormBtn;
