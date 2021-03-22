import { Meta } from "@storybook/react";
import React from "react";
import DetailMap from "./index";
import { withKnobs, number, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

declare global {
  interface Window {
    kakao: any;
  }
}

export default {
  title: "Molecules/DetailMap",
  component: DetailMap,
  decorators: [withKnobs],
} as Meta;

export const staticRoadview: React.FC = () => {
  return (
    <article className={"w-full sm:w-400"}>
      <DetailMap
        address={text("address", "성동구 사근동")}
        lat={number("lat", 33.450701)}
        lon={number("lon", 126.570667)}
        onRoadview={action("onRoadview")}
      />
    </article>
  );
};
