import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";
import ProfileBox from ".";

export default {
  title: "Molecules/ProfileBox",
  component: ProfileBox,
} as Meta;

export const BasicProfileBox: React.FC = () => {
  return (
    <ProfileBox
      label={text("label", "이름")}
      placeholder={text("placeholder", "samduke")}
      to={"/my/profile/modify_name"}
    />
  );
};
