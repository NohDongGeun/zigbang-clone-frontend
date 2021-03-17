import { Meta } from "@storybook/react";
import React from "react";
import FilterRange from "./index";
import "rc-slider/assets/index.css";
import { action } from "@storybook/addon-actions";

export default {
  title: "Molecules/FilterRange",
  component: FilterRange,
} as Meta;

export const basicRange: React.FC = () => {
  return (
    <article className={"w-full sm:w-400 h-40"}>
      <FilterRange
        labels={["최소", "5천만", "2.5억", "최대"]}
        onChange={action("onChange")}
      />
    </article>
  );
};
