import { findRooms_findRooms_rooms } from "../__generated__/findRooms";

export interface ICardProps extends findRooms_findRooms_rooms {
  /**
   * 면적 단위 false 이면 평으로 계산
   */
  unitChange?: boolean;
}
