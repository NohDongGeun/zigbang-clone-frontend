import { Meta } from "@storybook/react";
import React from "react";
import { Empty } from "../..";

export default {
  title: "Molecules/Empty",
  component: Empty,
} as Meta;

export const empty: React.FC = () => <Empty />;
