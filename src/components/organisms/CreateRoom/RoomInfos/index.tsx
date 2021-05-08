import React from "react";
import { FormProvider, useFormContext } from "react-hook-form";
import {
  RegisterBox,
  RegisterBtn,
  RegisterInput,
  RegisterLabel,
} from "../../..";

interface IRoomInfo {
  dealType: string;
  roomType: string;
  deposit: string;
  rent: string;
  floor: string;
  buildingFloor: string;
  exclusiveArea: string;
  supplyArea: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  rentError: boolean;
  depositError: boolean;
  floorError: boolean;
  buildingFloorError: boolean;
  exclusiveAreaError: boolean;
  supplyAreaError: boolean;
}

const DEALTYPE = [
  { value: "year", name: "전세" },
  { value: "month", name: "월세" },
];
const ROOMTYPE = [
  { value: "oneRoom", name: "원룸" },
  { value: "twoRoom", name: "투룸" },
  { value: "threeRoom", name: "쓰리룸" },
  { value: "threeRoomPlus", name: "포룸이상" },
];

const RoomInfos: React.FC<IRoomInfo> = ({
  deposit,
  rent,
  floor,
  buildingFloor,
  exclusiveArea,
  supplyArea,
  onChange,
  onClick,
  dealType,
  roomType,
  rentError,
  depositError,
  floorError,
  buildingFloorError,
  exclusiveAreaError,
  supplyAreaError,
}) => {
  return (
    <RegisterBox label={"기본 정보"}>
      <RegisterLabel label={"거래 유형"}>
        {DEALTYPE.map((e, i) => {
          return (
            <RegisterBtn
              className={"last:mr-3"}
              name={"dealType"}
              value={e.value}
              onClick={onClick}
              label={e.name}
              key={i}
              isActive={dealType === e.value ? true : false}
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
              onClick={onClick}
              label={e.name}
              key={i}
              isActive={roomType === e.value ? true : false}
            />
          );
        })}
      </RegisterLabel>
      <RegisterLabel label={"가격"}>
        <RegisterInput
          placeholder={"보증금"}
          name={"deposit"}
          label={"만원"}
          value={deposit}
          onChange={onChange}
          isError={depositError}
        />
        <RegisterInput
          placeholder={"월세"}
          name={"rent"}
          label={"만원"}
          value={rent}
          onChange={onChange}
          isError={rentError}
        />
      </RegisterLabel>
      <RegisterLabel label={"면적"}>
        <RegisterInput
          placeholder={"전용면적"}
          name={"exclusiveArea"}
          label={"㎡"}
          value={exclusiveArea}
          onChange={onChange}
          isError={exclusiveAreaError}
        />
        <RegisterInput
          placeholder={"공급면적"}
          name={"supplyArea"}
          label={"㎡"}
          value={supplyArea}
          onChange={onChange}
          isError={supplyAreaError}
        />
      </RegisterLabel>
      <RegisterLabel label={"층수"}>
        <RegisterInput
          placeholder={"전체층"}
          name={"buildingFloor"}
          label={"층"}
          value={buildingFloor}
          onChange={onChange}
          isError={buildingFloorError}
        />
        <RegisterInput
          placeholder={"해당층"}
          name={"floor"}
          label={"층"}
          value={floor}
          onChange={onChange}
          isError={floorError}
        />
      </RegisterLabel>
    </RegisterBox>
  );
};

export default RoomInfos;
