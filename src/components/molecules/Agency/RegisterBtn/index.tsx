import React, { useEffect } from "react";
import {
  FormProvider,
  NestedValue,
  RegisterOptions,
  useForm,
  useFormContext,
} from "react-hook-form";
import { UseFormBtn } from "../../..";
import { ITailwind } from "../../../../interfaces/Tailwind";

interface IRegisterBtn extends ITailwind {
  name: string;
  registerOptions: RegisterOptions;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  label: string;
  value: string | number;
}

const RegisterBtn: React.FC<IRegisterBtn> = ({ className, ...props }) => {
  const method = useFormContext();

  return (
    <FormProvider {...method}>
      <UseFormBtn
        className={[
          "sm:w-24 w-136 flex-auto  flex-grow-0  sm:flex-initial  mr-2 even:mr-0 sm:even:mr-2 sm:mb-2  sm:ml-0 py-2 outline-none text-center border border-gray-300 bg-gray-100 font-semibold text-gray-700 focus:bg-white focus:font-bold  focus:text-yellow-300 focus:border-yellow-400",
          className,
        ].join(" ")}
        {...props}
      />
    </FormProvider>
  );
};

export default RegisterBtn;
