import { Meta } from "@storybook/react";
import React from "react";
import RoomLocation from "./index";

export default {
  title: "Organisms/RoomLocation",
  component: RoomLocation,
} as Meta;

export const roomLocation: React.FC = () => {
  return (
    <RoomLocation location={[126.734086, 37.413294]} address={"울산광역시"} />
  );
};
