import { action } from "@storybook/addon-actions";
import { Meta } from "@storybook/react";
import React from "react";
import { RoomUl } from "../../..";

export default {
  title: "Molecules/RoomUl",
  component: RoomUl,
} as Meta;

export const ZzimRoomUl: React.FC = () => {
  return <RoomUl rooms={[]} handleCard={action("handleCard")} />;
};
