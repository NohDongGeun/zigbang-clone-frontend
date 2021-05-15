import { Meta } from "@storybook/react";
import React from "react";
import Home from ".";
import ApolloWrapper from "../../utils/ApolloWrapper";

export default {
  title: "Pages/Home",
  component: Home,
} as Meta;

export const home: React.FC = () => {
  return (
    <ApolloWrapper>
      <Home />
    </ApolloWrapper>
  );
};
