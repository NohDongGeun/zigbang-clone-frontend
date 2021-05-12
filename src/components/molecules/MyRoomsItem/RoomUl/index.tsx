import React from "react";
import RoomCard, { IRoomCard } from "../../RoomCard";

interface IRoomUl {
  rooms: IRoomCard[];
  handleCard: (point: number[], id: number) => void;
}

const RoomUl: React.FC<IRoomUl> = ({ rooms, handleCard }) => {
  return (
    <ul
      className={
        "sm:-ml-5 flex flex-row flex-wrap sm:justify-start sm:items-start"
      }
    >
      {rooms.map((e, i) => (
        <li
          className={
            "lg:w-1/4 md:w-1/3 sm:w-1/2 flex sm:justify-end sm:items-end justify-center items-center w-full   "
          }
        >
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
            key={i}
          />
        </li>
      ))}
    </ul>
  );
};

export default RoomUl;
