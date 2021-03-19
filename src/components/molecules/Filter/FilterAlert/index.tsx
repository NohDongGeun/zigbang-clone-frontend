import React from "react";
import { Button, Heading, Text } from "../../..";

interface IFilterAlert {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  alertHandler: () => void;
  alert: boolean;
}

const FilterAlert: React.FC<IFilterAlert> = ({
  alert,
  onClick,
  alertHandler,
}) => {
  return (
    <>
      {alert && (
        <div
          className={
            "w-screen h-screen bg-transparent flex justify-center items-center"
          }
        >
          <aside className={"flex flex-col w-80 rounded-md bg-white"}>
            <Heading
              className={
                "p-3 text-center border-b border-gray-300 font-bold text-xl"
              }
              Type={"h1"}
              label={"거래 유형을 선택해 주세요."}
            />
            <div
              className={
                "flex flex-row justify-start items-center mx-3 py-3 border-b border-gray-300"
              }
            >
              <Button
                className={"mx-3 w-5 h-5 "}
                name={"dealType"}
                onClick={onClick}
                value={"전체"}
              />
              <Text label={"전체"} />
            </div>
            <div
              className={
                "flex flex-row justify-start items-center mx-3 py-3 border-b border-gray-300"
              }
            >
              <Button
                className={"mx-3 w-5 h-5"}
                name={"dealType"}
                onClick={onClick}
                value={"전세"}
              />
              <Text label={"전세"} />
            </div>
            <div
              className={"flex flex-row justify-start items-center mx-3 py-3"}
            >
              <Button
                className={"mx-3 w-5 h-5"}
                name={"dealType"}
                onClick={onClick}
                value={"월세"}
              />
              <Text label={"월세"} />
            </div>
            <div
              className={
                "flex flex-1 justify-center items-center py-3 px-6 border-t border-gray-300"
              }
            >
              <Button
                className={
                  "w-full bg-yellow-500 hover:bg-yellow-600 py-3 rounded-md text-center font-bold text-white"
                }
                onClick={alertHandler}
                label={"확인"}
              />
            </div>
          </aside>
        </div>
      )}
    </>
  );
};

export default FilterAlert;
