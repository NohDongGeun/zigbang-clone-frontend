import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";
import { ModifyTemplate } from "../..";
import UseFormWrapper from "../../../utils/UseFormWrapper";

export default {
  title: "Templates/ModifyTemplate",
  component: ModifyTemplate,
} as Meta;

export const NameModifyTemplate: React.FC = () => {
  return (
    <UseFormWrapper>
      <ModifyTemplate
        onSubmit={action("onSubmit")}
        message={text("message", "잘못 입력하셨습니다.")}
      />
    </UseFormWrapper>
  );
};
