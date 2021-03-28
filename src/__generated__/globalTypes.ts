/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum DealType {
  month = "month",
  year = "year",
}

export enum RoomType {
  oneRoom = "oneRoom",
  threeRoom = "threeRoom",
  threeRoomPlus = "threeRoomPlus",
  twoRoom = "twoRoom",
}

export interface FindLocationInput {
  dealType: string;
  dist: number[];
  coordinates: number[];
  deposit: number[];
  rent: number[];
  floorType: string;
  roomType: string;
  isParking: boolean;
}

export interface FindRoomsInput {
  dealType: string;
  dist: number[];
  coordinates: number[];
  deposit: number[];
  rent: number[];
  floorType: string;
  roomType: string;
  isParking: boolean;
  page: number;
}

export interface RoomDetailInput {
  roomId: number;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
