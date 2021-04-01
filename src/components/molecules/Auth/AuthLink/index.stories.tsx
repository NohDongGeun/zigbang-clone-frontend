import { Meta } from "@storybook/react";
import React from "react";
import AuthLink from ".";

export default {
  title: "Molecules/AuthLink",
  component: AuthLink,
} as Meta;

export const loginLink = () => <AuthLink />;
