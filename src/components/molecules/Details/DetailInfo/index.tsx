import React from "react";
import { DetailItem } from "../../..";
import DetailBar from "../DetailBar";

interface IDetailInfo {
  /** 주차가능 여부 */
  isParking: string;
  /** 주차가능 여부 */

  /** 엘리베이터 여부 */
  isElevator: string;

  /** 입주가능일 */
  PosibleMove: string;

  /** 면적 */
  exclusiveArea: number;

  /** 관리비 */
  expense: number;

  /** 방 구조 */
  structure: string;

  /** 준공일 */
  completionDate: string;

  /** 층수 */
  floor: number;

  /** 건물 층수 */
  buildingFloor: number;

  /** 주소  */
  address: string;

  /** 면적 단위 false 면 평 으로 계산 */
  unitChange: boolean;
}

const DetailInfo: React.FC<IDetailInfo> = ({
  isParking,
  isElevator,
  PosibleMove,
  exclusiveArea,
  expense,
  structure,
  completionDate,
  floor,
  buildingFloor,
  address,
  unitChange,
}) => {
  return (
    <DetailBar label={"매물 정보"}>
      <DetailItem label={"주차"} value={isParking} />
      <DetailItem label={"엘리베이터"} value={isElevator} />
      <DetailItem label={"입주가능일"} value={PosibleMove} />
      <DetailItem label={"관리비"} value={`${expense}만원`} />
      <DetailItem label={"구조"} value={structure} />
      <DetailItem
        label={"면적(전용)"}
        value={
          unitChange
            ? `${exclusiveArea}㎡`
            : `${Math.round(exclusiveArea / 3.306)}평`
        }
      />
      <DetailItem label={"준공날짜"} value={completionDate} />
      <DetailItem label={"층/건물층수"} value={`${floor}/${buildingFloor}`} />
      <DetailItem label={"주소"} value={address} />
    </DetailBar>
  );
};

export default DetailInfo;
