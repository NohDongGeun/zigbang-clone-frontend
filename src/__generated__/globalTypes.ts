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

export interface RoomDetailInput {
  roomId: number;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
