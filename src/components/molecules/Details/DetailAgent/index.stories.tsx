import { Meta } from "@storybook/react";
import React from "react";
import DetailAgent from "./index";
import { text, withKnobs } from "@storybook/addon-knobs";
import test_people from "../../../../assets/img/test_people.png";

export default {
  title: "Molecules/DetailAgent",
  component: DetailAgent,
  decorators: [withKnobs],
} as Meta;

export const detailAgent: React.FC = () => {
  return (
    <article className={"w-full sm:w-400 flex flex-col border border-gray-700"}>
      <DetailAgent
        name={text("name", "미소부동산공인중개사사무소")}
        img={text("img", test_people)}
        phone={text("phone", "02-2233-5555")}
      />
    </article>
  );
};
