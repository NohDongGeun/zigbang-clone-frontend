import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";
import RoomOptions from ".";

export default {
  title: "Organisms/RoomOptions",
  component: RoomOptions,
} as Meta;

export const BRoomOptions: React.FC = () => {
  return (
    <RoomOptions
      expense={"5"}
      expenses={["1, 2, 3"]}
      options={["1, 2, 3"]}
      possibleMove={"오늘바로"}
      currentMoveNum={21}
      onChangeTextarea={action("onChangeTextarea")}
      onChange={action("onChange")}
      onClick={action("onClick")}
      isParking={"불가능"}
      expenseError={boolean("expenseError", false)}
    />
  );
};
