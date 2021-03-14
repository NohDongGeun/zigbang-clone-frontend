import { Meta } from "@storybook/react";
import React from "react";
import DetailItem from ".";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "Atoms/DetailItem",
  component: DetailItem,
  decorators: [withKnobs],
} as Meta;

export const item: React.FC = () => (
  <div className={"sm:w-400 w-full"}>
    <DetailItem label={text("label", "주차")} value={text("value", "불가능")} />
  </div>
);
