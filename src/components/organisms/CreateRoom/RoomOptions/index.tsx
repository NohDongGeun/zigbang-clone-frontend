import React, { ChangeEventHandler, useEffect, useState } from "react";
import {
  Input,
  RegisterBox,
  RegisterBtn,
  RegisterInput,
  RegisterLabel,
  RegisterTextArea,
  Text,
} from "../../..";
const ISPARKING = [
  { value: "가능", name: "가능" },
  { value: "불가능", name: "불가능" },
];
const EXPENSES = [
  { value: "1", name: "전기세" },
  { value: "2", name: "가스" },
  { value: "3", name: "수도" },
  { value: "4", name: "인터넷" },
  { value: "5", name: "TV" },
];
const OPTIONS = [
  { value: "1", name: "에어컨" },
  { value: "2", name: "냉장고" },
  { value: "3", name: "세탁기" },
  { value: "4", name: "가스레인지" },
  { value: "5", name: "인덕션" },
  { value: "6", name: "전자레인지" },
  { value: "7", name: "책상" },
  { value: "8", name: "책장" },
  { value: "9", name: "침대" },
  { value: "10", name: "옷장" },
  { value: "11", name: "신발장" },
  { value: "12", name: "싱크대" },
];

interface IRoomOptions {
  expense: string;
  isParking: string;
  expenses: string[];
  options: string[];
  possibleMove: string;
  currentMoveNum: number;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeTextarea: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
const RoomOptions: React.FC<IRoomOptions> = ({
  expense,
  expenses,
  options,
  currentMoveNum,
  possibleMove,
  onClick,
  onChange,
  onChangeTextarea,
  isParking,
}) => {
  useEffect(() => {
    console.log(expenses);
  }, [expenses]);
  return (
    <RegisterBox label={"추가 정보"}>
      <RegisterLabel label={"주차"}>
        {ISPARKING.map((e, i) => {
          return (
            <RegisterBtn
              name={"isParking"}
              value={e.value}
              onClick={onClick}
              label={e.name}
              key={i}
              className={"last:mr-3"}
              isActive={isParking === e.value ? true : false}
            />
          );
        })}
      </RegisterLabel>
      <RegisterLabel label={"관리비"}>
        <RegisterInput
          placeholder={"관리비"}
          name={"expense"}
          label={"만원"}
          value={expense}
          onChange={onChange}
        />
        <div className={"flex w-136 h-42 mb-2 justify-start  items-center"}>
          <Input type={"checkbox"} className={"mr-1 w-4 h-4"} />
          <Text label={"관리비 없음"} className={"text-sm"} />
        </div>
      </RegisterLabel>
      <RegisterLabel label={"관리비 포함"}>
        {EXPENSES.map((e, i) => {
          return (
            <RegisterBtn
              name={"expenses"}
              value={e.value}
              key={i}
              label={e.name}
              onClick={onClick}
              className={"mb-1 sm:mb-0"}
              isActive={expenses.indexOf(e.value) === -1 ? false : true}
            />
          );
        })}
      </RegisterLabel>
      <RegisterLabel label={"옵션"}>
        {OPTIONS.map((e, i) => {
          return (
            <RegisterBtn
              name={"options"}
              value={e.value}
              onClick={onClick}
              label={e.name}
              key={i}
              className={"mb-1 sm:mb-0"}
              isActive={options.indexOf(e.value) === -1 ? false : true}
            />
          );
        })}
      </RegisterLabel>
      <RegisterLabel label={"입주가능일"}>
        <RegisterTextArea
          isError={currentMoveNum > 20 ? true : false}
          label={`${currentMoveNum}자 입력 / 최대 20자`}
          placeholder={"예)즉시입주,날짜협의,8월 28일 이후"}
          size={"basic"}
          onChange={onChangeTextarea}
          name={"possibleMove"}
        />
      </RegisterLabel>
    </RegisterBox>
  );
};

export default RoomOptions;
