export interface IDetailOption {
  /**
   * 옵션 label
   */
  label: string;

  /**
   * 옵션 이미지 소스
   */
  src: string;
}

export type DealType = "전체" | "전세" | "월세";
export type RoomType = "원룸" | "투룸" | "쓰리룸" | "포룸이상";
export type FloorType = "전체" | "지상층" | "반지하/옥탑";
