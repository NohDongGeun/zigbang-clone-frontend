import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";
import Header from ".";
import ApolloWrapper from "../../../utils/ApolloWrapper";

export default {
  title: "Organisms/Header",
  components: Header,
} as Meta;

export const header: React.FC = () => {
  return (
    <ApolloWrapper>
      <Header
        isAgent={boolean("isAgent", false)}
        logged={boolean("logged", true)}
        name={text("name", "로그인 및 회원가입")}
        handleSideNav={action("handleSideNav")}
        showNav={boolean("showNav", false)}
      />
    </ApolloWrapper>
  );
};
