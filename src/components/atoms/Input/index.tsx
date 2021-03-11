import React from "react";
import { ITailwind } from "../../../interfaces/Tailwind";

interface IInputProps extends ITailwind {
  /**
   * type 여부
   */
  type: "email" | "text" | "number" | "password";

  /**
   * placeholder
   */
  placeholder: string;

  /**
   * input 핸들러
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IInputProps> = ({
  placeholder,
  type,
  onChange,
  ...props
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      {...props}
    ></input>
  );
};

export default Input;
