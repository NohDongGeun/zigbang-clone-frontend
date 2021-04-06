import React from "react";
import { FieldElement, Ref } from "react-hook-form";
import { ITailwind } from "../../../interfaces/Tailwind";
import { useFormContext, ValidationRule } from "react-hook-form";

interface IInputProps extends ITailwind {
  /**
   * type 여부
   */
  type: "checkbox" | "radio";

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

  /**input required */
  required?: boolean;
}

const Input: React.FC<IInputProps> = ({
  placeholder,
  type,
  onChange,
  ...props
}) => {
  const { register } = useFormContext();
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
