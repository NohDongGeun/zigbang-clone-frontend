import { Meta } from "@storybook/react";
import React from "react";
import { RoomHeading } from "../../..";

export default {
  title: "Molecules/RoomHeading",
  component: RoomHeading,
} as Meta;

export const BasicRoomHeading: React.FC = () => {
  return <RoomHeading label={"room"} />;
};
