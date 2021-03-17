import React from "react";
import { ITailwind } from "../../../interfaces/Tailwind";

interface IInputProps extends ITailwind {
  /**
   * type 여부
   */
  type: "email" | "text" | "number" | "password" | "checkbox" | "radio";

  /**
   * placeholder
   */
  placeholder?: string;

  /**
   * checkbox 일때 checked
   */
  checked?: boolean;

  /**
   * input name
   */
  name?: string;

  /**
   * input value
   */
  value?: string;

  /**
   * input change핸들러
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * input click핸들러
   */
  onClick?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
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
