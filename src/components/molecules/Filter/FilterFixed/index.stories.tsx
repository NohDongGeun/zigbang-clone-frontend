import { Meta } from "@storybook/react";
import React from "react";
import FilterFixed from "./index";
import { radios, text, withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "Molecules/FilterFixed",
  component: FilterFixed,
  decorators: [withKnobs],
} as Meta;

enum DealType {
  all = "전체",
  deposit = "전세",
  rent = "월세",
}

export const filterFixed: React.FC = () => {
  return (
    <article className={"flex w-full sm:w-400"}>
      <FilterFixed
        label={text("label", "검색 조건을 설정해주세요.")}
        value={radios("value", DealType, DealType.all)}
        handleAlert={action("handleAlert")}
        handleFilter={action("handleFilter")}
      />
    </article>
  );
};
