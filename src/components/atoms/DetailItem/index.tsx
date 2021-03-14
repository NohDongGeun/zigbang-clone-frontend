import React from "react";
import { Text } from "../..";

interface IDetailItemProps {
  /**
   * item 이름
   */
  label: string;

  /**
   * item 값
   */
  value: string;
}

const DetailItem: React.FC<IDetailItemProps> = ({ label, value }) => {
  return (
    <div className={"flex flex-row border-b border-gray-300 p-2"}>
      <div className={"flex w-1/3 justify-start items-center"}>
        <Text label={label} className={"text-gray-500"} />
      </div>
      <div className={"flex w-2/3 justify-start items-center"}>
        <Text label={value} className={"text-gray-900"} />
      </div>
    </div>
  );
};
export default DetailItem;
