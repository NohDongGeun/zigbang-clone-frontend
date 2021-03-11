import { Meta } from "@storybook/react";
import React from "react";
import Card from ".";
import { MemoryRouter } from "react-router-dom";
import {
  boolean,
  text,
  withKnobs,
  radios,
  number,
} from "@storybook/addon-knobs";

export default {
  title: "Molecules/Card",
  component: Card,
  decorators: [withKnobs],
} as Meta;

enum DealType {
  deposit = "전세",
  rent = "월세",
}
enum RoomType {
  oneRoom = "원룸",
  twoRoom = "투룸",
  threeRoom = "쓰리룸",
  fourRoom = "포룸이상",
}

export const allCard: React.FC = () => {
  return (
    <article className={"flex sm:w-400 w-full justify-center items-center"}>
      <Card
        id={123}
        dealType={radios("dealType", DealType, DealType.deposit)}
        roomType={radios("roomType", RoomType, RoomType.oneRoom)}
        rent={number("rent", 50)}
        deposit={number("deposit", 1000)}
        text={text("text", "위치 좋고 남향인 풀옵션 원룸")}
        floor={number("floor", 5)}
        exclusiveArea={number("exclusiveArea", 13)}
        address={text("address", "서대문구 연희동")}
        unitChange={boolean("unitChange", true)}
        image={
          "https://ic.zigbang.com/ic/items/26271602/1.jpg?w=400&h=300&q=70&a=1"
        }
      />
    </article>
  );
};
