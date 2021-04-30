import React from "react";
import { IconType } from "react-icons";
import { Button, Text } from "../..";

interface ISearchItem {
  handleItem: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  name: string;
  value: string[];
  Icon: IconType;
}

const SearchItem: React.FC<ISearchItem> = ({
  handleItem,
  Icon,
  name,
  value,
}) => {
  return (
    <Button
      className={
        "p-3  flex flex-row w-full hover:bg-gray-200 rounded-xl justify-start items-center mt-1"
      }
      onClick={handleItem}
      value={value}
    >
      {/* <Icon className={"mr-1 text-gray-400 pointer-events-none"} size={"25"}></Icon> */}
      <Text className={"text-gray-400"} label={name} />
    </Button>
  );
};

export default SearchItem;
