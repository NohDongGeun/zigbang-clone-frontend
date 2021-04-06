import { Meta } from "@storybook/react";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import RoomInfos from "./index";

export default {
  title: "Organisms/RoomInfos",
  component: RoomInfos,
} as Meta;

export const BasicRoomInfos: React.FC = () => {
  const method = useForm();
  return (
    <FormProvider {...method}>
      <RoomInfos />
    </FormProvider>
  );
};
