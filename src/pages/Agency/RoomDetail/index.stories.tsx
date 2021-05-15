import { Meta } from "@storybook/react";
import React from "react";
import RoomDetail from ".";
import ApolloWrapper from "../../../utils/ApolloWrapper";

export default {
  title: "Pages/RoomDetail",
  component: RoomDetail,
} as Meta;

export const AgencyRoomDetail: React.FC = () => {
  return (
    <ApolloWrapper>
      <RoomDetail />
    </ApolloWrapper>
  );
};
