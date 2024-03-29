import React, { useEffect } from "react";
import { DetailItem } from "../../..";
import { useRoomType } from "../../../../hooks/useRoomType";
import DetailBar from "../DetailBar";

interface IDetailInfo {
  /** 주차가능 여부 */
  isParking: boolean;

  /** 엘리베이터 여부 */
  isElevator: boolean;

  /** 입주가능일 */
  posibleMove: string;

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
  posibleMove,
  exclusiveArea,
  expense,
  structure,
  floor,
  buildingFloor,
  address,
  unitChange,
}) => {
  useEffect(() => {
    console.log(structure);
  }, [structure]);
  return (
    <DetailBar label={"매물 정보"}>
      <DetailItem label={"주차"} value={isParking ? "가능" : "불가능"} />
      <DetailItem label={"엘리베이터"} value={isElevator ? "있음" : "없음"} />
      <DetailItem label={"입주가능일"} value={posibleMove} />
      <DetailItem label={"관리비"} value={`${expense}만원`} />
      <DetailItem label={"구조"} value={useRoomType(structure)} />
      <DetailItem
        label={"면적(전용)"}
        value={
          unitChange
            ? `${exclusiveArea}㎡`
            : `${Math.round(exclusiveArea / 3.306)}평`
        }
      />
      <DetailItem
        label={"층/건물층수"}
        value={`${floor}층/${buildingFloor}층`}
      />
      <DetailItem label={"주소"} value={address} />
    </DetailBar>
  );
};

export default DetailInfo;
