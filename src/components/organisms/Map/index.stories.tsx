import { Meta } from "@storybook/react";
import React from "react";

import Map from "./index";

export default {
  title: "Oraganisms/Map",
  component: Map,
} as Meta;

export const map: React.FC = () => {
  return (
    <div className={"w-screen h-screen"}>
      <Map />
    </div>
  );
};
