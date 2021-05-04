import React from "react";
import { Heading, RoomCard, RoomHeading, RoomText, RoomUl, Text } from "../..";
import { IRoomCard } from "../../molecules/RoomCard";

export interface IMyRoomTemplate {
  rooms: IRoomCard[];
  handleCard: (point: number[], id: number) => void;
}

const MyRoomTemplate: React.FC<IMyRoomTemplate> = ({ rooms, handleCard }) => {
  return (
    <div className={"w-full h-600 flex flex-col md:flex-row  mt-64 md:mt-80"}>
      <div className={"xl:w-1280 lg:w-1024 md:w-768 mx-auto  h-full   p-3  "}>
        <RoomHeading label={"찜한매물"} />
        <RoomText count={rooms.length} label={"의 찜한 매물이 있습니다."} />
        <RoomUl rooms={rooms} handleCard={handleCard} />
      </div>
    </div>
  );
};

export default MyRoomTemplate;
