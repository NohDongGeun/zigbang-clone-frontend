import { number } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";
import { RoomText } from "../../..";

export default {
  title: "Molecules/RoomText",
  component: RoomText,
} as Meta;

export const BasicRoomText: React.FC = () => {
  return <RoomText count={number("count", 1)} label={"찜한 매물"} />;
};
