import { Meta } from "@storybook/react";
import React from "react";
import FilterBox from "./index";
import { text, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "Molecules/FilterBox",
  component: FilterBox,
  decorators: [withKnobs],
} as Meta;

export const basicFilterBox: React.FC = () => {
  return (
    <article className={"flex flex-col w-full sm:w-400"}>
      <FilterBox
        label={text("label", "거래 유형")}
        value={text("value", "월세")}
      />
    </article>
  );
};
