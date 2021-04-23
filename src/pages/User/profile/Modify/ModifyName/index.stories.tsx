import { Meta } from "@storybook/react";
import React from "react";
import ModifyName from ".";
import ApolloWrapper from "../../../../../utils/ApolloWrapper";

export default {
  title: "Pages/Profile/Modify_Name",
  component: ModifyName,
} as Meta;

export const BasicModifyName: React.FC = () => {
  return (
    <ApolloWrapper>
      <ModifyName />
    </ApolloWrapper>
  );
};
