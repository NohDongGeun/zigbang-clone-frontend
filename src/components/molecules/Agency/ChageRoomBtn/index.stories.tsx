import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";
import ChangeRoomBtn from ".";

export default {
  title: "Molecules/ChangeRoomBtn",
  component: ChangeRoomBtn,
} as Meta;

export const ActiveChangeRoomBtn: React.FC = () => {
  return (
    <ChangeRoomBtn
      onClickDelete={action("onClickDelete")}
      onClickActive={action("onClickActive")}
      isActive={boolean("isActive", true)}
    />
  );
};
