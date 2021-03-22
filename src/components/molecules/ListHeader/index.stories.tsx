import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";
import ListHeader from ".";

export default {
  title: "Molecules/ListHeader",
  component: ListHeader,
} as Meta;

export const listHeader: React.FC = () => {
  return (
    <div
      className={"w-full sm:w-400 flex flex-col h-72 border border-gray-300"}
    >
      <ListHeader
        onClick={action("onClick")}
        alt={""}
        src={""}
        isDetail={boolean("isDetail", true)}
        handleUnit={action("handleUnit")}
        label={text("label", "수원시 장안구 팔달동")}
      />
    </div>
  );
};
