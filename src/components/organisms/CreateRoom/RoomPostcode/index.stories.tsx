import { action } from "@storybook/addon-actions";
import { Meta } from "@storybook/react";
import React from "react";
import RoomPostcode from "./index";

export default {
  title: "Organisms/RoomPostcode",
  component: RoomPostcode,
} as Meta;

export const roomPostcode: React.FC = () => {
  return (
    <div className={"w-screen h-screen relative"}>
      <RoomPostcode onComplete={action("onConplete")} isActive={true} />
    </div>
  );
};
