import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";
import AgencyMainTemplate from ".";
import { IRoomCard } from "../../molecules/RoomCard";

export default {
  title: "Templates/AgencyMainTemplate",
  component: AgencyMainTemplate,
} as Meta;

const room: IRoomCard[] = [
  {
    id: 12,
    images: ["", ""],
    title: "테스트",
    deposit: 100,
    rent: 50,
    dealType: "월세",
    roomType: "원룸",
    floor: 1,
    exclusiveArea: 12,
    expense: 7,
    point: {
      __typename: "geometryTypes",
      coordinates: [],
    },
  },
];

export const agencyRegister: React.FC = () => {
  return (
    <AgencyMainTemplate
      isAgency={boolean("isAgency", true)}
      unActiveRooms={room}
      handleCard={action("handleCard")}
      rooms={room}
    />
  );
};
