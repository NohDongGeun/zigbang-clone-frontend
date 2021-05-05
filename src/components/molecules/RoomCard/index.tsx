import React from "react";
import { Link } from "react-router-dom";
import { Button, Img, Text } from "../..";
import { find_zzim_query_findZzimRooms_rooms_point } from "../../../__generated__/find_zzim_query";

export interface IRoomCard {
  id: number;
  images: string[];
  title: string;
  rent?: number;
  deposit: number;
  dealType: string;
  roomType: string;
  floor: number;
  exclusiveArea: number;
  expense: number;
  point: find_zzim_query_findZzimRooms_rooms_point;
}
interface IRooms extends IRoomCard {
  handleCard: (point: number[], id: number) => void;
}
const RoomCard: React.FC<IRooms> = ({
  images,
  expense,
  title,
  rent,
  deposit,
  dealType,
  roomType,
  floor,
  exclusiveArea,
  point,
  handleCard,
  id,
}) => {
  return (
    <section className={"flex flex-col w-72 sm:w-440 group  "}>
      <Button onClick={() => handleCard(point.coordinates, id)}>
        <div className={"w-full h-52 group-hover:opacity-75 "}>
          <Img
            className={"object-cover h-full w-full"}
            src={images[0]}
            alt={"사진"}
          />
        </div>
        <div className={"flex-1  flex flex-col justify-start items-start py-2"}>
          <Text
            className={"text-gray-500 text-sm font-semibold"}
            label={
              roomType === "oneRoom"
                ? "원룸"
                : roomType === "twoRoom"
                ? "투룸"
                : roomType === "threeRoom"
                ? "쓰리룸"
                : roomType === "threeRoomPlus"
                ? "포룸이싱"
                : "원룸"
            }
          />
          <Text
            className={"text-gray-900 text-xl font-bold my-1"}
            label={
              dealType === "month"
                ? `월세 ${deposit}/${rent}`
                : `전세 ${deposit}`
            }
          />
          <Text
            className={"text-gray-600"}
            label={`${floor}층, ${exclusiveArea}㎡ ,관리비 ${expense}만원 `}
          />
          <Text
            className={
              "text-gray-600 truncate w-full whitespace-nowrap text-left"
            }
            label={title}
          />
        </div>
      </Button>
    </section>
  );
};

export default RoomCard;
