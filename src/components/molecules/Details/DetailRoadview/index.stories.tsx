import { number } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";
import DetailRoadview from ".";

declare global {
  interface Window {
    kakao: any;
  }
}

export default {
  title: "Molecules/DetailRoadview",
  component: DetailRoadview,
} as Meta;

export const roadview: React.FC = () => {
  return (
    <div className={"w-full sm:w-400 h-screen"}>
      <DetailRoadview lon={number("lon", 127)} lat={number("lat", 37)} />
    </div>
  );
};
