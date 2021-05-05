import { Meta } from "@storybook/react";
import React from "react";
import DetailOptions from "./index";
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: "Molecules/DetailOptions",
  component: DetailOptions,
  decorators: [withKnobs],
} as Meta;

const options = [
  {
    name: "에어컨",
    img: "https://s.zigbang.com/zuix/ic_aircon_dim_cutline.png",
  },
  {
    name: "에어컨",
    img: "https://s.zigbang.com/zuix/ic_aircon_dim_cutline.png",
  },
  {
    name: "에어컨",
    img: "https://s.zigbang.com/zuix/ic_aircon_dim_cutline.png",
  },
  {
    name: "에어컨",
    img: "https://s.zigbang.com/zuix/ic_aircon_dim_cutline.png",
  },
  {
    name: "에어컨",
    img: "https://s.zigbang.com/zuix/ic_aircon_dim_cutline.png",
  },
];

export const detailOptions: React.FC = () => {
  return (
    <article className={"w-full sm:w-400 flex flex-row "}>
      <DetailOptions options={options} />
    </article>
  );
};

export const noOption: React.FC = () => {
  return (
    <article className={"w-full sm:w-400 flex flex-row "}>
      <DetailOptions />
    </article>
  );
};
