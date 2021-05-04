/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { RoomDetailInput, RoomType, DealType } from "./globalTypes";

// ====================================================
// GraphQL query operation: roomDetail
// ====================================================

export interface roomDetail_roomDetail_room_point {
  __typename: "geometryTypes";
  coordinates: number[];
}

export interface roomDetail_roomDetail_room_agency {
  __typename: "Agency";
  id: number;
  name: string;
  phoneNum: string | null;
  agent: string;
}

export interface roomDetail_roomDetail_room {
  __typename: "Room";
  roomType: RoomType;
  id: number;
  isParking: boolean;
  point: roomDetail_roomDetail_room_point;
  posibleMove: string;
  exclusiveArea: number;
  expense: number;
  floor: number;
  buildingFloor: number;
  address: string;
  title: string;
  dealType: DealType;
  rent: number;
  deposit: number;
  content: string;
  images: string[];
  agency: roomDetail_roomDetail_room_agency;
}

export interface roomDetail_roomDetail {
  __typename: "RoomDetailOutput";
  ok: boolean;
  error: string | null;
  like: boolean | null;
  room: roomDetail_roomDetail_room | null;
}

export interface roomDetail {
  roomDetail: roomDetail_roomDetail;
}

export interface roomDetailVariables {
  roomDetailInput: RoomDetailInput;
}
