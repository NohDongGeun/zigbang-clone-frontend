import React from "react";
import { Button, Heading, Img, Text } from "../../..";
import x_image from "../../../../assets/img/x_image.png";

interface IFilterHeader {
  reset: () => void;
  onClick: () => void;
}

const FilterHeader: React.FC<IFilterHeader> = ({ reset, onClick }) => {
  return (
    <section
      className={
        "flex flex-row justify-between items-center bg-white border-b border-gray-300 "
      }
    >
      <div
        className={
          "flex-1 flex flex-row justify-start items-center px-3 sm:py-4 py-3"
        }
      >
        <Button onClick={onClick}>
          <Img className={"w-6 h-6 mr-3"} src={x_image} alt={"필터 끄기"} />
        </Button>
        <Heading
          className={"text-gray-900 text-xl font-medium"}
          Type={"h1"}
          label={"필터"}
        />
      </div>
      <div className={"flex-1 flex justify-end items-center pr-3"}>
        <Button
          className={"text-gray-700 text-sm"}
          label={"모두 초기화"}
          onClick={reset}
        />
      </div>
    </section>
  );
};

export default React.memo(FilterHeader);
