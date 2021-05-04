import React from "react";
import RoomCard, { IRoomCard } from "../../RoomCard";

interface IRoomUl {
  rooms: IRoomCard[];
  handleCard: (point: number[], id: number) => void;
}

const RoomUl: React.FC<IRoomUl> = ({ rooms, handleCard }) => {
  return (
    <ul className={" -ml-5 flex flex-row flex-wrap  "}>
      {rooms.map((e, i) => (
        <li className={"lg:w-1/4 md:w-1/3 flex justify-end items-end"}>
          <RoomCard
            id={e.id}
            point={e.point}
            images={e.images}
            title={e.title}
            rent={e.rent}
            deposit={e.deposit}
            dealType={e.dealType}
            roomType={e.roomType}
            floor={e.floor}
            exclusiveArea={e.exclusiveArea}
            expense={e.expense}
            handleCard={handleCard}
          />
        </li>
      ))}
    </ul>
  );
};

export default RoomUl;
