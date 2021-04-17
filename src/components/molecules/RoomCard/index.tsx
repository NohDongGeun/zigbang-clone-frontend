import React from "react";
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

const RoomCard: React.FC<IRoomCard> = ({
  src,
  label,
  title,
  address,
  rent,
  deposit,
  dealType,
  roomType,
}) => {
  return (
    <section className={"flex flex-col w-80 sm:w-80"}>
      <div className={"w-full h-40 border border-gray-300"}>
        <Img src={src} alt={"사진"} />
      </div>
      <div className={"border border-gray-300"}>
        <Heading Type={"h2"} label={title} />
        <DetailItem
          label={"가격"}
          value={`${
            dealType === "월세" ? `월세 ${deposit}/${rent}` : `전세 ${deposit}`
          }`}
        />
        <DetailItem label={"구조"} value={roomType} />
        <DetailItem label={"주소"} value={address} />
      </div>
      <div className={"flex flex-row "}>
        <Button
          className={"flex-1 border border-gray-300 p-2"}
          label={"삭제"}
        />
        <Button className={"flex-1 border border-l-0 border-gray-300 p-2"} label={label} />
      </div>
    </section>
  );
};

export default RoomCard;
