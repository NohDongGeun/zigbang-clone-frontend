import { number } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";
import Detail, { IRoom } from ".";
import ApolloWrapper from "../../../utils/ApolloWrapper";
import test_people from "../../../assets/img/test_people.png";

export default {
  title: "Organisms/Detail",
  component: Detail,
} as Meta;

export const detail: React.FC = () => {
  return (
    <ApolloWrapper>
      <div className={"w-full sm:w-400 flex flex-col h-screen"}>
        <Detail id={number("id", 221)} />
      </div>
    </ApolloWrapper>
  );
};
