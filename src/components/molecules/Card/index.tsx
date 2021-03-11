import React from "react";
import { Link } from "react-router-dom";
import { Img, Heading, Text } from "../..";

interface ICardProps {
  /**
   * 방 거래유형
   */
  dealType: "전세" | "월세" | "전체";

  /**
   * 방 종류
   */
  roomType: "원룸" | "투룸" | "쓰리룸" | "포룸이상";

  /**
   * 월세
   */
  rent?: number;

  /**
   * 전세,보증금
   */
  deposit: number;

  /**
   * 방 이미지 소스
   */

  image: string;

  /**
   * 방 소개글
   */
  text: string;

  /**
   * 층수
   */
  floor: number;

  /**
   * 면적
   */
  exclusiveArea: number;

  /**
   * 주소
   */
  address: string;

  /**
   * 면적 단위 false 이면 평으로 계산
   */
  unitChange: boolean;

  /**
   * 카드 router
   */
  id: number;
}

const Card: React.FC<ICardProps> = ({
  dealType,
  roomType,
  rent,
  deposit,
  text,
  exclusiveArea,
  address,
  floor,
  image,
  id,
  unitChange = true,
}) => {
  return (
    <section className={"w-full h-full"}>
      <Link
        to={`/room/${id}`}
        className={"flex flex-row py-3 px-4 w-full h-36 hover:bg-gray-200"}
      >
        <div className={"w-5/12 flex"}>
          <Img src={image} alt={text} />
        </div>
        <div className={"w-7/12 flex flex-col justify-center items-start px-3"}>
          <Heading
            label={
              dealType === "월세"
                ? `${dealType} ${deposit}/${rent}`
                : `${dealType} ${deposit}`
            }
            className={"font-bold sm:text-xl text-lg"}
            Type={"h1"}
          />
          <Text
            label={roomType}
            className={"font-bold text-sm text-gray-500"}
          />
          <Text
            label={
              unitChange
                ? `${exclusiveArea}㎡ ${floor}층`
                : `${Math.round(exclusiveArea / 3.306)}평 ${floor}층`
            }
            className={"font-medium text-sm text-gray-700"}
          />
          <Text
            label={address}
            className={"font-medium text-sm text-gray-700"}
          />
          <Text
            label={text}
            className={
              "font-semibold text-sm text-gray-500 truncate whitespace-nowrap w-full"
            }
          />
        </div>
      </Link>
    </section>
  );
};

export default Card;
