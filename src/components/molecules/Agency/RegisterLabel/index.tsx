import React from "react";
import { Label } from "../../..";

interface IRegisterLabel {
  label: string;
}

const RegisterLabel: React.FC<IRegisterLabel> = ({ label, children }) => {
  return (
    <div className={"flex flex-col sm:flex-row sm:mt-3"}>
      <Label
        className={"flex-initial flex-shrink-0 w-36 py-3 sm:py-0 sm:leading-42"}
        label={label}
      />
      <div className={"flex flex-row flex-wrap justify-start items-center  "}>
        {children}
      </div>
    </div>
  );
};

export default RegisterLabel;
