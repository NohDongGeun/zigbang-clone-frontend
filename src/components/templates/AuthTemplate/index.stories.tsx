import { action } from "@storybook/addon-actions";
import { boolean, number, text } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import AuthTemplate from "./index";

export default {
  title: "Templates/AuthTemplate",
  component: AuthTemplate,
} as Meta;

export const PhoneAuth_1_Template: React.FC = () => {
  const method = useForm();
  return (
    <FormProvider {...method}>
      <AuthTemplate
        heading1={text("label1", "휴대폰 번호를 입력하시면")}
        heading2={text("label2", "문의 시 더욱 편리하게 연결됩니다.")}
        onSubmit={action("onSubmit")}
        label={text("label", "다음")}
        to={"/login"}
        registerOptions={{ required: true }}
        name={"phone"}
        useButton={true}
      />
    </FormProvider>
  );
};
