import { Meta } from "@storybook/react";
import React from "react";
import { Img } from "../..";
import placeholder from "../../../assets/img/placeholder.jpg";

export default {
  title: "Atoms/Img",
  component: Img,
} as Meta;

export const PlaceHolderImg: React.FC = () => {
  return <Img src={placeholder} alt={"image"} />;
};
