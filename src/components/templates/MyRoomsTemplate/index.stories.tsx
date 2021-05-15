import { action } from "@storybook/addon-actions";
import { Meta } from "@storybook/react";
import React from "react";
import MyRoomTemplate from ".";
import ApolloWrapper from "../../../utils/ApolloWrapper";
import { IRoomCard } from "../../molecules/RoomCard";

export default {
  title: "Templates/MyRoomTemplate",
  component: MyRoomTemplate,
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

export const ZZimTemplate: React.FC = () => {
  return (
    <ApolloWrapper>
      <MyRoomTemplate rooms={room} handleCard={action("handleCard")} />
    </ApolloWrapper>
  );
};
