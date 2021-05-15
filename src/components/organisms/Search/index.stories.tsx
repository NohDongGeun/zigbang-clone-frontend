import { Meta } from "@storybook/react";
import React from "react";
import Search from ".";
import ApolloWrapper from "../../../utils/ApolloWrapper";

export default {
  title: "Organisms/Search",
  component: Search,
} as Meta;

export const search: React.FC = () => {
  return (
    <ApolloWrapper>
      <Search />
    </ApolloWrapper>
  );
};
