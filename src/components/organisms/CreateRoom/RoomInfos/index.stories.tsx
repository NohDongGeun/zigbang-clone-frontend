import { action } from "@storybook/addon-actions";
import { Meta } from "@storybook/react";
import React from "react";
import RoomInfos from "./index";

export default {
  title: "Organisms/RoomInfos",
  component: RoomInfos,
} as Meta;

export const BasicRoomInfos: React.FC = () => {
  return (
    <RoomInfos
      deposit={"10"}
      rent={"1"}
      floor={"1"}
      buildingFloor={"6"}
      exclusiveArea={"13"}
      supplyArea={"13"}
      onChange={action("onChange")}
      onClick={action("onClick")}
      dealType={""}
      roomType={""}
    />
  );
};
