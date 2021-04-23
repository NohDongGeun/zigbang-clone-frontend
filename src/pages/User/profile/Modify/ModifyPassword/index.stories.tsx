import { Meta } from "@storybook/react";
import React from "react";
import ModifyPassword from ".";
import ApolloWrapper from "../../../../../utils/ApolloWrapper";

export default {
  title: "Pages/Profile/ModifyPassword",
  component: ModifyPassword,
} as Meta;

export const BasicModifyPassword: React.FC = () => {
  return (
    <ApolloWrapper>
      <ModifyPassword />
    </ApolloWrapper>
  );
};
