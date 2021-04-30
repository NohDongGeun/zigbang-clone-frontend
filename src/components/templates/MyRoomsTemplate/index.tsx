import React from "react";
import {  Heading, RoomCard, Text } from "../..";

const MyRoomTemplate: React.FC = () => {
  return (
    <div className={"w-full h-600 flex flex-col md:flex-row  mt-64 md:mt-80"}>
      <div className={"xl:w-1280 lg:w-1024 md:w-768 mx-auto  h-full   p-3  "}>
        <Heading
          Type={"h2"}
          className={"w-full py-5 text-gray-700 font-semibold text-xl"}
          label={"찜한매물"}
        />
        <div
          className={
            "border-t border-gray-300 flex flex-row justify-start items-center"
          }
        >
          <Text className={"py-2"} label={`총 `} />
          <Text className={"py-2 ml-1 text-yellow-500 "} label={` 11개`} />
          <Text className={"py-2"} label={"의 찜한 매물이 있습니다."} />
        </div>
        <div className={""}>
          <ul className={" -ml-5 flex flex-row flex-wrap  "}>
            <li className={"lg:w-1/4 md:w-1/3 flex justify-end items-end"}>
              <RoomCard />
            </li>
            <li className={"lg:w-1/4  md:w-1/3 flex justify-end items-end"}>
              <RoomCard />
            </li>
            <li className={"lg:w-1/4  md:w-1/3 flex justify-end items-end"}>
              <RoomCard />
            </li>
            <li className={"lg:w-1/4  md:w-1/3 flex justify-end items-end"}>
              <RoomCard />
            </li>
            <li className={"lg:w-1/4  md:w-1/3 flex justify-end items-end"}>
              <RoomCard />
            </li>
            <li className={"lg:w-1/4  md:w-1/3 flex justify-end items-end"}>
              <RoomCard />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyRoomTemplate;
