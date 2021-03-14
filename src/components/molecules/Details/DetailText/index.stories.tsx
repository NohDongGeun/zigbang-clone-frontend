import { Meta } from "@storybook/react";
import React from "react";
import DetailText from "./index";
import { text, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "Molecules/DetailText",
  component: DetailText,
  decorators: [withKnobs],
} as Meta;

export const detailText: React.FC = () => {
  return (
    <article className={"w-full sm:w-400"}>
      <DetailText text={text("text", "")} label={text("label", "상세 목록")} />
    </article>
  );
};

export const agentText: React.FC = () => {
  return (
    <article className={"w-full sm:w-400"}>
      <DetailText
        text={text("text", "")}
        label={text("label", "중개사무소 인사말")}
      />
    </article>
  );
};
