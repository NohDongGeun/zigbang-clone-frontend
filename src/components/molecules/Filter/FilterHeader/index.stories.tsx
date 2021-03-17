import { action } from "@storybook/addon-actions";
import { Meta } from "@storybook/react";
import React from "react";
import FilterHeader from ".";

export default {
  title: "Molecules/FilterHeader",
  component: FilterHeader,
} as Meta;

export const filterHeader: React.FC = () => {
  return (
    <article className={"w-full sm:w-400"}>
      <FilterHeader onClick={action("onClick")} />
    </article>
  );
};
