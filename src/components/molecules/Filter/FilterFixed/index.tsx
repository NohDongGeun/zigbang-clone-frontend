import React from "react";
import { Button, Img, Text } from "../../..";
import arrowUp from "../../../../assets/img/arrowUp.png";
import filter_button from "../../../../assets/img/filter_button.png";

interface IFilterFixed {
  /**
   * filter dealtype value
   */
  value: "전체" | "전세" | "월세";

  /**
   * filter된 옵션 label
   */
  label: string;

  /**
   * dealtype alert
   */
  handleAlert: () => void;

  /**
   * filter 창 열기
   */
  handleFilter: () => void;
}

const FilterFixed: React.FC<IFilterFixed> = ({
  value,
  label,
  handleAlert,
  handleFilter,
}) => {
  return (
    <section
      className={
        "flex flex-row p-1 relative sm:p-2 w-full justify-center items-center bg-white shadow-md"
      }
    >
      <div className={"flex w-1/6"}>
        <Button
          onClick={handleAlert}
          className={
            "flex w-full flex-row flex-grow-0 flex-shrink-1 h-8 border border-gray-300 justify-center items-center text-gray-700"
          }
        >
          <Text label={value} className={"sm:text-sm text-xs"} />
          <Img
            src={arrowUp}
            className={"h-4 w-4  sm:h-5 sm:w-5"}
            alt={"거래유형 선택"}
          />
        </Button>
      </div>
      <div className={"flex w-5/6 pl-1 "}>
        <Button
          onClick={handleFilter}
          className={"flex w-full flex-row  h-8 justify-center items-center "}
        >
          <div
            className={
              "flex flex-grow-0 w-9/12 flex-shrink-1 border border-gray-300 border-r-0 h-full justify-center items-center px-3"
            }
          >
            <Text
              label={label}
              className={
                "sm:text-sm text-xs truncate whitespace-nowrap text-gray-700"
              }
            />
          </div>
          <div
            className={
              "flex flex-row flex-grow-0 w-3/12 flex-shrink-1 border border-gray-900 h-full justify-center items-center"
            }
          >
            <Img
              src={filter_button}
              className={"sm:w-5 sm:h-5 w-4 h-4"}
              alt={"필터 열기"}
            />
            <Text
              label={"필터"}
              className={"sm:text-sm text-xs text-gray-900"}
            />
          </div>
        </Button>
      </div>
    </section>
  );
};

export default FilterFixed;
