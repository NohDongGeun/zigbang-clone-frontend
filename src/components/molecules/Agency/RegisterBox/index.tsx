import React from "react";
import { Heading } from "../../..";

interface IRegisterBox {
  label: string;
}

const RegisterBox: React.FC<IRegisterBox> = ({ children, label }) => {
  return (
    <section className={"w-full flex flex-col mb-3"}>
      <Heading
        className={"p-3 pb-5  font-bold text-lg"}
        Type={"h2"}
        label={label}
      />
      <div
        className={"w-full border-t-2 border-black flex flex-col px-2  sm:px-3"}
      >
        {children}
      </div>
    </section>
  );
};

export default RegisterBox;
