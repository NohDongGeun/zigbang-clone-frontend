import React from "react";
import { Link } from "react-router-dom";
import { Button, DetailItem, Heading, Img, Text } from "../..";

interface IRoomCard {
  src: string;
  label: string;
  address: string;
  title: string;
  rent?: number;
  deposit: number;
  dealType: string;
  roomType: string;
}

const RoomCard: React.FC = ({}) => {
  return (
    <section className={"flex flex-col h-96 w-72 sm:w-440 group "}>
      <Link to={"/room/"}>
        <div className={"flex-1 group-hover:opacity-75"}>
          <Img
            className={"h-full w-full"}
            src={
              "https://ic.zigbang.com/ic/items/26271602/1.jpg?w=400&h=300&q=70&a=1"
            }
            alt={"사진"}
          />
        </div>
        <div className={"flex-1 flex flex-col justify-start items-start py-2"}>
          <Text
            className={"text-gray-500 text-sm font-semibold"}
            label={"원룸"}
          />
          <Text
            className={"text-gray-900 text-xl font-bold my-1"}
            label={"전세 7000"}
          />
          <Text className={"text-gray-700"} label={"4층,24평,관리비6만 "} />
          <Text className={"text-gray-700"} label={"동작구 사당동 "} />
          <Text className={"text-gray-700"} label={"깔끔한 원룸"} />
        </div>
      </Link>
    </section>
  );
};

export default RoomCard;
