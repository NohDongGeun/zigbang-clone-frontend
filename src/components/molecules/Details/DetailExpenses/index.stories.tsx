import { Meta } from "@storybook/react";
import React from "react";
import DetailExpenses from "./index";
import { withKnobs, number } from "@storybook/addon-knobs";

export default {
  title: "Molecules/DetailExpense",
  component: DetailExpenses,
  decorators: [withKnobs],
} as Meta;

const options = [
  {
    name: "수도",
    img: "https://s.zigbang.com/zuix/ic_aircon_dim_cutline.png",
  },
  {
    name: "전기",
    img: "https://s.zigbang.com/zuix/ic_aircon_dim_cutline.png",
  },
  {
    name: "가스",
    img: "https://s.zigbang.com/zuix/ic_aircon_dim_cutline.png",
  },
  {
    name: "인터넷",
    img: "https://s.zigbang.com/zuix/ic_aircon_dim_cutline.png",
  },
  {
    name: "티비",
    img: "https://s.zigbang.com/zuix/ic_aircon_dim_cutline.png",
  },
];

export const detailExpenses: React.FC = () => {
  return (
    <article className={"w-full sm:w-400 flex flex-row "}>
      <DetailExpenses expense={number("expense", 7)} expenseOptions={options} />
    </article>
  );
};

export const noExpense: React.FC = () => {
  return (
    <article className={"w-full sm:w-400 flex flex-row "}>
      <DetailExpenses expense={number("expense", 7)} />
    </article>
  );
};
