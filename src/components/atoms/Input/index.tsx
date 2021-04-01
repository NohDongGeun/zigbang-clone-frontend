import React from "react";
import { FieldElement, Ref } from "react-hook-form";
import { ITailwind } from "../../../interfaces/Tailwind";
import { useFormContext, ValidationRule } from "react-hook-form";

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
  /**
   * react-hook-form ref
   */
  isRef?: boolean;

  /**
   * react-hook-form validation
   */
  pattern?: ValidationRule<RegExp>;

  /**input required */
  required?: boolean;
}

const Input: React.FC<IInputProps> = ({
  placeholder,
  type,
  onChange,
  isRef,
  pattern,
  ...props
}) => {
  const { register } = useFormContext();
  return (
    <input
      ref={isRef ? register({ required: true, pattern }) : null}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      {...props}
    ></input>
  );
};

export default Input;
