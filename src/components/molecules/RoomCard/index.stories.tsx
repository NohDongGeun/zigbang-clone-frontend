import { action } from "@storybook/addon-actions";
import { number, text } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";
import RoomCard, { IRoomCard } from ".";

export default {
  title: "Molecules/RoomCard",
  component: RoomCard,
} as Meta;

const room: IRoomCard = {
  id: 12,
  images: ["", ""],
  title: "테스트",
  rent: 50,
  deposit: 100,
  dealType: "전세",
  roomType: "원룸",
  floor: 1,
  exclusiveArea: 13,
  expense: 7,
  point: { __typename: "geometryTypes", coordinates: [] },
};

export const BasicRoomCard: React.FC = () => {
  return <RoomCard handleCard={action("handleCard")} {...room} />;
};
