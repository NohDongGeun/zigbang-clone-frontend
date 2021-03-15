import React from "react";
import { Heading } from "../../..";

interface IFilterBox {
  /**
   * filter 이름
   */
  label: string;

  /**
   * filter된 값
   */
  value?: string;
}

const FilterBox: React.FC<IFilterBox> = ({ label, value, children }) => {
  return (
    <section
      className={
        "flex flex-col bg-white w-full p-1 sm:p-2 justify-center items-start border border-gray-500"
      }
    >
      <Heading
        className={"text-base text-gray-700"}
        Type={"h1"}
        label={label}
      />
      {value && (
        <Heading
          className={" text-xl text-yellow-500 font-bold"}
          Type={"h2"}
          label={value}
        />
      )}
      <div className={"flex w-full"}>{children}</div>
    </section>
  );
};

export default FilterBox;
