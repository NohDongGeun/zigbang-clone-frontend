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
    label: "수도",
    src: "https://s.zigbang.com/zuix/ic_aircon_dim_cutline.png",
  },
  {
    label: "전기",
    src: "https://s.zigbang.com/zuix/ic_aircon_dim_cutline.png",
  },
  {
    label: "가스",
    src: "https://s.zigbang.com/zuix/ic_aircon_dim_cutline.png",
  },
  {
    label: "인터넷",
    src: "https://s.zigbang.com/zuix/ic_aircon_dim_cutline.png",
  },
  {
    label: "티비",
    src: "https://s.zigbang.com/zuix/ic_aircon_dim_cutline.png",
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
