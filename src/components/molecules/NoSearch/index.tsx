import React from "react";
import { Text } from "../..";

const NoSearch: React.FC = () => {
  return (
    <div className={"flex flex-initial h-full justify-center items-center"}>
      <Text
        className={"flex justify-center items-center text-gray-500"}
        label={"검색 결과가 없습니다."}
      />
    </div>
  );
};
export default NoSearch;
