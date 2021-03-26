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
      <DetailRoadview location={[33.450701, 126.570667]} />
    </div>
  );
};
