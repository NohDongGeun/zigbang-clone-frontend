import React, { useEffect } from "react";

import { Button, Input } from "../../..";
import { ITailwind } from "../../../../interfaces/Tailwind";

interface IRegisterBtn extends ITailwind {
  name: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  label: string;
  value: string | number;
  isActive: boolean;
}

const RegisterBtn: React.FC<IRegisterBtn> = ({
  value,
  className,
  isActive,
  ...props
}) => {
  return (
    <Button
      type={"button"}
      value={value}
      className={[
        `sm:w-24 w-136 flex-auto  flex-grow-0  sm:flex-initial  mr-2 even:mr-0 sm:even:mr-2 sm:mb-2  sm:ml-0 py-2 outline-none text-center border  ${
          isActive
            ? "bg-white font-bold text-yellow-300 border-yellow-400"
            : "border-gray-300 bg-gray-100 font-semibold text-gray-700"
        }`,
        className,
      ].join(" ")}
      {...props}
    />
  );
};

export default RegisterBtn;
