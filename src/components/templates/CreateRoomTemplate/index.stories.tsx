import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";
import CreateRoomTemplate from "./index";

export default {
  title: "Templates/CreateRoomTemplate",
  component: CreateRoomTemplate,
} as Meta;

export const createRoomTemplate: React.FC = () => {
  return (
    <CreateRoomTemplate
      onShowPortal={action("onShowPortal")}
      dealType={"전세"}
      isParking={"불가능"}
      roomType={"원룸"}
      onClick={action("onClick")}
      deposit={"10"}
      rent={"10"}
      floor={"1"}
      buildingFloor={"6"}
      exclusiveArea={"13"}
      supplyArea={"13"}
      expense={"5"}
      expenses={["1, 2, 3"]}
      options={["1, 2, 3"]}
      possibleMove={"오늘"}
      address={"울산광역시 남구 삼산동"}
      currentMoveNum={12}
      currentTitleNum={12}
      currentContentNum={12}
      onChange={action("onChange")}
      onChangeTextarea={action("onChangeTextarea")}
      location={[137, 42]}
      prevUrl={["asd", "asd"]}
      onRemove={action("onRemove")}
      onSubmit={action("onSubmit")}
      label={text("label", "완료")}
      addImages={action("addImages")}
      title={"title"}
      content={"content"}
      rentError={boolean("rentError", false)}
      depositError={boolean("depositError", false)}
      floorError={boolean("floorError", false)}
      buildingFloorError={boolean("buildingFloorError", false)}
      exclusiveAreaError={boolean("exclusiveAreaError", false)}
      supplyAreaError={boolean("supplyAreaError", false)}
      expenseError={boolean("expenseError", false)}
    />
  );
};
