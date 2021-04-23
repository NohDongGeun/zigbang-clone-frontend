import React from "react";
import { FormProvider, useFormContext } from "react-hook-form";

const UseFormWrapper: React.FC = ({ children }) => {
  const methods = useFormContext();
  return <FormProvider {...methods}>{children}</FormProvider>;
};

export default UseFormWrapper;
