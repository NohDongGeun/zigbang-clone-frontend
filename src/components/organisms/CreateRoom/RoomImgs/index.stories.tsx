import { action } from "@storybook/addon-actions";
import { Meta } from "@storybook/react";
import React from "react";
import RoomImgs from "./index";

export default {
  title: "Organisms/RoomImgs",
  component: RoomImgs,
} as Meta;

export const roomImg: React.FC = () => {
  return (
    <RoomImgs
      prevUrl={["image1", "image2"]}
      onRemove={action("onRemove")}
      addImages={action("addImages")}
    />
  );
};
