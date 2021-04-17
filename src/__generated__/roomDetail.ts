/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { RoomDetailInput, DealType } from "./globalTypes";

// ====================================================
// GraphQL query operation: roomDetail
// ====================================================

export interface roomDetail_roomDetail_room_point {
  __typename: "geometryTypes";
  coordinates: number[];
}

export interface roomDetail_roomDetail_room_agency {
  __typename: "Agency";
  name: string;
  phoneNum: string | null;
  agent: string;
}

export interface roomDetail_roomDetail_room {
  __typename: "Room";
  id: number;
  isParking: boolean;
  point: roomDetail_roomDetail_room_point;
  isElevator: boolean;
  posibleMove: string;
  exclusiveArea: number;
  expense: number;
  completionDate: string;
  floor: number;
  buildingFloor: number;
  address: string;
  text: string;
  image: string;
  dealType: DealType;
  rent: number;
  deposit: number;
  images: string[];
  agency: roomDetail_roomDetail_room_agency;
}

export interface roomDetail_roomDetail {
  __typename: "RoomDetailOutput";
  ok: boolean;
  error: string | null;
  room: roomDetail_roomDetail_room | null;
}

export interface roomDetail {
  roomDetail: roomDetail_roomDetail;
}

export interface roomDetailVariables {
  roomDetailInput: RoomDetailInput;
}
