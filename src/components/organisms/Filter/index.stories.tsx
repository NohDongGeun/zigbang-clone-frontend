import { Meta } from "@storybook/react";
import React from "react";
import Filter from ".";

export default {
  title: "Organisms/Filter",
  components: Filter,
} as Meta;

export const filter: React.FC = () => {
  return (
    <div className={"w-screen relative"} style={{ height: "550px" }}>
      <Filter />
    </div>
  );
};
