import React from "react";
import { Heading, Img, Text } from "../../..";

interface IDetailHeaderProps {
  /** 방 거래유형 */
  dealType: "전세" | "월세";

  /** 전세,보증금 */
  deposit: number;

  /** 월세 */
  rent?: number;

  /** 면적 단위 false 면 평으로 계산 */
  unitChange: boolean;

  /** 등록번호 */
  id: number;

  /** 방 이미지 소스 */
  image: string;

  /** 소개글 */
  text: string;

  /** 구조 */
  structure: string;

  /** 면적 */
  exclusiveArea: number;

  /** 관리비 */
  expense: number;
}

const DetailHeader: React.FC<IDetailHeaderProps> = ({
  dealType,
  deposit,
  rent,
  image,
  text,
  structure,
  id,
  unitChange,
  exclusiveArea,
  expense,
}) => {
  return (
    <section className={"flex flex-col w-full bg-white mb-3"}>
      <div className={"w-full h-72 flex"}>
        <Img src={image} alt={text} />
      </div>
      <div className={"flex flex-col px-2 py-3 border-b border-gray-300"}>
        <Heading
          label={
            dealType === "월세"
              ? `${dealType} ${deposit}/${rent}`
              : `${dealType} ${deposit}`
          }
          Type={"h1"}
          className={"font-bold text-2xl"}
        />
        <Text
          label={`등록번호 ${id}`}
          className={"text-gray-400 text-sm sm:text-base"}
        />
      </div>
      <div className={"flex flex-row px-2 py-3 border-b border-gray-300"}>
        <div
          className={
            "flex flex-col flex-auto sm:flex-1 justify-center items-start"
          }
        >
          <Text label={"면적(전용)"} className={"sm:text-sm text-xs"} />
          <Text
            label={
              unitChange
                ? `${exclusiveArea}m²`
                : `${Math.round(exclusiveArea / 3.306)}평`
            }
            className={"font-bold sm:text-xl text-base text-blue-800"}
          />
        </div>
        <div
          className={
            "flex flex-col flex-auto sm:flex-1 justify-center items-start"
          }
        >
          <Text label={"관리비"} className={"sm:text-sm text-xs"} />
          <Text
            label={`${expense}만원`}
            className={"font-bold sm:text-xl text-base text-blue-800"}
          />
        </div>
        <div
          className={
            "flex flex-col flex-auto sm:flex-1 justify-center items-start"
          }
        >
          <Text label={"구조"} className={"sm:text-sm text-xs"} />
          <Text
            label={structure}
            className={"font-bold sm:text-xl text-base text-blue-800"}
          />
        </div>
      </div>
      <div className={"flex px-2 py-3 justify-start items-center flex-wrap"}>
        <Text
          label={text}
          className={"text-base font-semibold text-gray-400"}
        />
      </div>
    </section>
  );
};

export default DetailHeader;
