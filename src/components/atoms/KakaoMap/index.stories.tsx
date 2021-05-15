import { Meta } from "@storybook/react";
import React from "react";
import KakaoMap from ".";

export default {
  title: "Atoms/KakaoMap",
  component: KakaoMap,
} as Meta;

export const StaticKaKaoMap: React.FC = () => {
  return (
    <KakaoMap lon={126.970833} lat={37.554722} className={"w-full h-full"} />
  );
};
