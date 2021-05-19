import { useReactiveVar } from "@apollo/client";
import React from "react";
import { Header, RoomHeading, RoomText, RoomUl } from "../..";
import NotAgencyBox from "../../molecules/Agency/NotAgencyBox";
import { IRoomCard } from "../../molecules/RoomCard";
import { IMyRoomTemplate } from "../MyRoomsTemplate";

interface IAgencyMainTemplate extends IMyRoomTemplate {
  isAgency: boolean;
  unActiveRooms: IRoomCard[];
  handleCard: (point: number[], id: number) => void;
}

const AgencyMainTemplate: React.FC<IAgencyMainTemplate> = ({
  isAgency,
  rooms,
  unActiveRooms,
  handleCard,
}) => {
  return (
    <div className={"w-full h-600 flex flex-col md:flex-col  md:mt-80"}>
      {isAgency ? (
        <>
          <div
            className={
              "xl:w-1280 lg:w-1024 md:w-768 mx-auto  p-3  text-center sm:text-left flex-1"
            }
          >
            <RoomHeading label={"광고 중 매물"} />
            <RoomText
              count={rooms.length}
              label={"의 광고 중 매물이 있습니다."}
            />
            <RoomUl rooms={rooms} handleCard={handleCard} />
          </div>
          <div
            className={
              "xl:w-1280 lg:w-1024 md:w-768 mx-auto   p-3 text-center sm:text-left flex-1"
            }
          >
            <RoomHeading label={"광고 중지 매물"} />
            <RoomText
              count={unActiveRooms.length}
              label={"의 광고 중지 매물이 있습니다."}
            />
            <RoomUl rooms={unActiveRooms} handleCard={handleCard} />
          </div>
        </>
      ) : (
        <NotAgencyBox />
      )}
    </div>
  );
};

export default AgencyMainTemplate;
