import { Meta } from "@storybook/react";
import React from "react";
import DetailHeader from "./index";
import {
  boolean,
  text,
  withKnobs,
  radios,
  number,
} from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "Molecules/DetailHeader",
  component: DetailHeader,
  decorators: [withKnobs],
} as Meta;

enum DealType {
  deposit = "전세",
  rent = "월세",
}

export const detailHeader: React.FC = () => {
  return (
    <article className={"flex sm:w-400 w-full justify-center items-center"}>
      <DetailHeader
        exclusiveArea={number("exclusiveArea", 13)}
        expense={number("expense", 5)}
        id={number("id", 123)}
        structure={text("structure", "분리형 원룸")}
        text={text("text", "위치 좋고 남향인 풀옵션 원룸")}
        deposit={1000}
        rent={50}
        unitChange={boolean("unitChange", false)}
        dealType={radios("dealType", DealType, DealType.deposit)}
        images={[
          "https://ic.zigbang.com/ic/items/26271602/1.jpg?w=400&h=300&q=70&a=1",
        ]}
      />
    </article>
  );
};
