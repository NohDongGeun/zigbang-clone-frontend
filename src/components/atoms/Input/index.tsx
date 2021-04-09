import React from "react";
import { ITailwind } from "../../../interfaces/Tailwind";

interface IInputProps extends ITailwind {
  /**
   * type 여부
   */
  type: "text" | "checkbox" | "radio" | "button" | "number";

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
  value?: string | number | "";

  /**
   * input change핸들러
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * input click핸들러
   */
  onClick?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;

  /**input required */
  required?: boolean;
}

const Input: React.FC<IInputProps> = ({
  placeholder,
  type,
  onChange,
  value,
  ...props
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      {...props}
    ></input>
  );
};

export default Input;
