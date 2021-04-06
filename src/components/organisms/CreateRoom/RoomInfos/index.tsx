import React from "react";
import {
  RegisterBox,
  RegisterBtn,
  RegisterInput,
  RegisterLabel,
} from "../../..";

interface IRoomInfo {}

const DEALTYPE = [
  { value: "year", name: "전세" },
  { value: "month", name: "월세" },
];
const ROOMTYPE = [
  { value: "oneRoom", name: "원룸" },
  { value: "twoRoom", name: "투룸" },
  { value: "threeRoom", name: "쓰리룸" },
  { value: "fourRoom", name: "포룸이상" },
];

const RoomInfos: React.FC<IRoomInfo> = () => {
  return (
    <RegisterBox label={"기본 정보"}>
      <RegisterLabel label={"거래 유형"}>
        {DEALTYPE.map((e, i) => {
          return (
            <RegisterBtn
              className={"last:mr-3"}
              name={"dealType"}
              value={e.value}
              registerOptions={{ required: true }}
              onClick={() => console.log("Asd")}
              label={e.name}
              key={i}
            />
          );
        })}
      </RegisterLabel>
      <RegisterLabel label={"방 유형"}>
        {ROOMTYPE.map((e, i) => {
          return (
            <RegisterBtn
              className={"mb-1 sm:mb-0"}
              name={"roomType"}
              value={e.value}
              registerOptions={{ required: true }}
              onClick={() => console.log("Asd")}
              label={e.name}
              key={i}
            />
          );
        })}
      </RegisterLabel>
      <RegisterLabel label={"가격"}>
        <RegisterInput
          placeholder={"보증금"}
          registerOptions={{ required: true }}
          name={"deposit"}
          label={"만원"}
        />
        <RegisterInput
          placeholder={"월세"}
          registerOptions={{ required: true }}
          name={"rent"}
          label={"만원"}
        />
      </RegisterLabel>
      <RegisterLabel label={"면적"}>
        <RegisterInput
          placeholder={"전용면적"}
          registerOptions={{ required: true }}
          name={"exclusiveArea"}
          label={"㎡"}
        />
        <RegisterInput
          placeholder={"공급면적"}
          registerOptions={{ required: true }}
          name={"supplyArea "}
          label={"㎡"}
        />
      </RegisterLabel>
      <RegisterLabel label={"층수"}>
        <RegisterInput
          placeholder={"전체층"}
          registerOptions={{ required: true }}
          name={"exclusiveArea"}
          label={"층"}
        />
        <RegisterInput
          placeholder={"해당층"}
          registerOptions={{ required: true }}
          name={"supplyArea "}
          label={"층"}
        />
      </RegisterLabel>
    </RegisterBox>
  );
};

export default RoomInfos;
