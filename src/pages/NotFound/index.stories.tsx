import { text } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";
import NotFound from ".";

export default {
  title: "Pages/NotFound",
  component: NotFound,
} as Meta;

export const NotFound404: React.FC = () => {
  return (
    <NotFound
      errorMessage={text("errorMessage", "찾을수 없는 페이지입니다 :)")}
      pathLabel={text("pathLabel", "홈으로 가기")}
      path={"/room"}
    />
  );
};
