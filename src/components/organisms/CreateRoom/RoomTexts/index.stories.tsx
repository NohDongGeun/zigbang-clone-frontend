import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";
import RoomTexts from ".";

export default {
  title: "organisms/RoomTexts",
  component: RoomTexts,
} as Meta;

export const roomTexts: React.FC = () => {
  return (
    <RoomTexts
      onChangeTextarea={action("onChangeTextarea")}
      currentContentNum={2}
      currentTitleNum={3}
      title={"title"}
      content={"content"}
      titleError={boolean("titleError", false)}
      contentError={boolean("contentError", false)}
    />
  );
};
