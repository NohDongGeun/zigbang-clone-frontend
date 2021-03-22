import { Meta } from "@storybook/react";
import React from "react";
import DetailInfo from ".";
import { boolean, text, withKnobs, number } from "@storybook/addon-knobs";

export default {
  title: "Molecules/DetailInfo",
  component: DetailInfo,
  decorators: [withKnobs],
} as Meta;

export const detailInfo: React.FC = () => {
  return (
    <article className={"sm:w-400 w-full"}>
      <DetailInfo
        isParking={boolean("isParking", false)}
        isElevator={boolean("isElevator", false)}
        posibleMove={text("PosibleMove", "바로 입주가능")}
        exclusiveArea={number("exclusiveArea", 13)}
        expense={number("expense", 7)}
        structure={text("structure", "분리형 원룸")}
        completionDate={text("completionDate", "2020.01.02")}
        floor={number("floor", 3)}
        buildingFloor={number("buildingFloor", 6)}
        address={text("address", "동작구 사당동")}
        unitChange={boolean("unitChange", false)}
      />
    </article>
  );
};
