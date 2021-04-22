import { ApolloProvider } from "@apollo/client";
import { action } from "@storybook/addon-actions";
import { Meta } from "@storybook/react";
import React from "react";
import ApolloWrapper from "../../../ApolloWrapper";
import { findRooms_findRooms_rooms } from "../../../__generated__/findRooms";
import List from "./";

export default {
  title: "Organisms/List",
  component: List,
} as Meta;

export const list: React.FC = () => {
  return (
    <ApolloWrapper>
      <div className={"w-full sm:w-400 flex flex-col h-screen"}>
        <List count={0} />
      </div>
    </ApolloWrapper>
  );
};
