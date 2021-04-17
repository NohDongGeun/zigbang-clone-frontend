import { number, text } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";
import RoomCard from ".";

export default {
  title: "Molecules/RoomCard",
  component: RoomCard,
} as Meta;

export const BasicRoomCard: React.FC = () => {
  return (
    <RoomCard
      src={text("src", "Asd")}
      title={text("title","싸게나온 원룸")}
      label={text("label", "문의하기")}
      dealType={text("dealType", "월세")}
      roomType={text("roomType", "원룸")}
      rent={number("rent", 100)}
      deposit={number("deposit", 1000)}
      address={text("address", "서울시 동작구 사당동 근처")}
    />
  );
};
