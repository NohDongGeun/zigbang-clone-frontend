import { Meta } from "@storybook/react";
import React from "react";
import CreateRoom from ".";

export default {
  title: "Pages/CreateRoom",
  component: CreateRoom,
} as Meta;

export const createRoom: React.FC = () => {
  return <CreateRoom />;
};
