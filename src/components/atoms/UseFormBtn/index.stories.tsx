import { Meta } from "@storybook/react";
import React from "react";
import { UseFormBtn } from "../..";

export default {
  title: "Atoms/UseFormBtn",
  component: UseFormBtn,
} as Meta;

export const FormBtn: React.FC = () => {
    
  return <UseFormBtn name={"email"} registerOptions={{ required: true }} />;
};
