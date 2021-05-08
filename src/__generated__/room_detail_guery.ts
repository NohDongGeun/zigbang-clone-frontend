/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { RoomDetailInput, RoomType, DealType } from "./globalTypes";

// ====================================================
// GraphQL query operation: room_detail_guery
// ====================================================

export interface room_detail_guery_roomDetail_room_options {
  __typename: "Options";
  id: number;
}

export interface room_detail_guery_roomDetail_room_expenses {
  __typename: "Expenses";
  id: number;
}

export interface room_detail_guery_roomDetail_room_point {
  __typename: "geometryTypes";
  coordinates: number[];
}

export interface room_detail_guery_roomDetail_room {
  __typename: "Room";
  roomType: RoomType;
  dealType: DealType;
  floor: number;
  buildingFloor: number;
  options: room_detail_guery_roomDetail_room_options[] | null;
  expense: number;
  expenses: room_detail_guery_roomDetail_room_expenses[] | null;
  deposit: number;
  rent: number;
  isParking: boolean;
  posibleMove: string;
  exclusiveArea: number;
  supplyArea: number;
  content: string;
  title: string;
  address: string;
  point: room_detail_guery_roomDetail_room_point;
  images: string[];
}

export interface room_detail_guery_roomDetail {
  __typename: "RoomDetailOutput";
  ok: boolean;
  error: string | null;
  room: room_detail_guery_roomDetail_room | null;
}

export interface room_detail_guery {
  roomDetail: room_detail_guery_roomDetail;
}

export interface room_detail_gueryVariables {
  roomDetailInput: RoomDetailInput;
}
