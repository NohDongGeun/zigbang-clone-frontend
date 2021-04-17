import React from "react";
import { Input, Text} from "../../..";


interface IAuthInputProps {
  placeholder: string;
  name: string;
  label: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RegisterInput: React.FC<IAuthInputProps> = ({
  placeholder,
  name,
  label,
  value,
  onChange,
}) => {
  return (
    <div
      className={
        "flex flex-row w-136 sm:w-200 mb-2 mr-2 even:mr-0 justify-end items-center border border-gray-300 focus-within:border-gray-400"
      }
    >
      <Input
        className={
          "w-full h-42 px-2 text-gray-700 text-sm sm:text-base  text-start border-none outline-none focus:bg-white"
        }
        placeholder={placeholder}
        type={"number"}
        name={name}
        required={true}
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
