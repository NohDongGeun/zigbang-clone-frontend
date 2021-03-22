export interface ICardProps {
  /**
   * 방 거래유형
   */
  dealType: "전세" | "월세";

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
  unitChange?: boolean;

  /**
   * 카드 router
   */
  id: number;
}
