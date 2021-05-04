import React from "react";
import { Text } from "../../..";

interface IRoomText {
  count: number;
  label: string;
}

const RoomText: React.FC<IRoomText> = ({ count, label }) => {
  return (
    <div
      className={
        "border-t border-gray-300 flex flex-row justify-start items-center"
      }
    >
      <Text className={"py-2"} label={`총 `} />
      <Text className={"py-2 ml-1 text-yellow-500 "} label={`${count}개`} />
      <Text className={"py-2"} label={label} />
    </div>
  );
};

export default RoomText;
