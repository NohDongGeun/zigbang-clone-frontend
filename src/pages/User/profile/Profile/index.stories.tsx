import { Meta } from "@storybook/react";
import React from "react";
import Profile from ".";
import ApolloWrapper from "../../../../utils/ApolloWrapper";

export default {
  title: "Pages/Profile",
  component: Profile,
} as Meta;

export const UserProfile: React.FC = () => {
  return (
    <ApolloWrapper>
      <Profile />;
    </ApolloWrapper>
  );
};
