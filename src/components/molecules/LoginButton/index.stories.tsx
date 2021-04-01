import { Meta } from "@storybook/react";
import React from "react";
import LoginButton from ".";
import kakao from "../../../assets/img/kakao.png";

export default {
  title: "Molecules/LoginButton",
  component: LoginButton,
} as Meta;

export const kakaoButton: React.FC = () => (
  <LoginButton
    className={"bg-yellow-200"}
    src={kakao}
    alt={"카카오 로그인"}
    label={"카카오톡으로 시작"}
  />
);
