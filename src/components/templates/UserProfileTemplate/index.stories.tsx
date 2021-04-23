import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";
import UserProfileTemplate from ".";

export default {
  title: "Templates/UserProfile",
  component: UserProfileTemplate,
} as Meta;

export const BasicUserProfile: React.FC = () => {
  return (
    <UserProfileTemplate
      email={text("email", "sam5787@naver.com")}
      name={text("name", "samduke")}
      logout={action("logout")}
      phone={null}
    />
  );
};
