import { action } from "@storybook/addon-actions";
import { Meta } from "@storybook/react";
import React from "react";
import RoomImg from ".";
import ceoImg from "../../../assets/img/ceo_ad_img.png";

export default {
  title: "Atoms/RoomImg",
  component: RoomImg,
} as Meta;

export const BasicRoomImg: React.FC = () => {
  return <RoomImg src={ceoImg} alt={"사진"} onRemove={action("onRemove")} />;
};

export const TwoRoomImg: React.FC = () => {
  return (
    <div className={"w-full flex flex-row"}>
      <RoomImg src={ceoImg} alt={"사진"} onRemove={action("onRemove")} />
      <RoomImg src={ceoImg} alt={"사진"} onRemove={action("onRemove")} />
    </div>
  );
};
