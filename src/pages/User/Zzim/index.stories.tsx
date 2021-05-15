import { Meta } from "@storybook/react";
import React from "react";
import Zzim from ".";
import ApolloWrapper from "../../../utils/ApolloWrapper";

export default {
  title: "Pages/Zzim",
  component: Zzim,
} as Meta;

export const UserZzim: React.FC = () => {
  return (
    <ApolloWrapper>
      <Zzim />
    </ApolloWrapper>
  );
};
