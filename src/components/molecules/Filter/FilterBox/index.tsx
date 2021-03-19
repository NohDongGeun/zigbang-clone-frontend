import React from "react";
import { Heading } from "../../..";
import { ITailwind } from "../../../../interfaces/Tailwind";

interface IFilterBox extends ITailwind {
  /**
   * filter 이름
   */
  label: string;

  /**
   * filter된 값
   */
  value?: string;

}

const FilterBox: React.FC<IFilterBox> = ({
  label,
  value,
  children,
  className,
}) => {
  return (
    <section
      className={[
        "flex flex-col bg-white w-full p-1 sm:p-2 justify-center items-start",
        className,
      ].join(" ")}
    >
      <Heading
        className={"text-base text-gray-700"}
        Type={"h1"}
        label={label}
      />
      {value && (
        <Heading
          className={" text-xl text-yellow-500 font-bold pt-2"}
          Type={"h2"}
          label={value}
        />
      )}
      <div className={"flex w-full"}>{children}</div>
    </section>
  );
};

export default FilterBox;
