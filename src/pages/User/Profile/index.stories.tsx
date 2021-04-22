import { Meta } from "@storybook/react";
import React from "react";
import Profile from ".";

export default {
  title: "Pages/Profile",
  component: Profile,
} as Meta;

export const UserProfile: React.FC = () => {
  return <Profile />;
};
