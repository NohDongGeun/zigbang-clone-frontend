/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PrivateRoomDetailInput, RoomType, DealType } from "./globalTypes";

// ====================================================
// GraphQL query operation: private_room_detail_query
// ====================================================

export interface private_room_detail_query_privateRoomDetail_room_options {
  __typename: "Options";
  id: number;
}

export interface private_room_detail_query_privateRoomDetail_room_expenses {
  __typename: "Expenses";
  id: number;
}

export interface private_room_detail_query_privateRoomDetail_room_point {
  __typename: "geometryTypes";
  coordinates: number[];
}

export interface private_room_detail_query_privateRoomDetail_room {
  __typename: "Room";
  id: number;
  roomType: RoomType;
  dealType: DealType;
  floor: number;
  buildingFloor: number;
  options: private_room_detail_query_privateRoomDetail_room_options[] | null;
  expense: number;
  expenses: private_room_detail_query_privateRoomDetail_room_expenses[] | null;
  deposit: number;
  rent: number;
  isParking: boolean;
  posibleMove: string;
  exclusiveArea: number;
  supplyArea: number;
  content: string;
  title: string;
  address: string;
  point: private_room_detail_query_privateRoomDetail_room_point;
  images: string[];
  s3Code: string;
  isActive: boolean;
  secretAddress: string;
}

export interface private_room_detail_query_privateRoomDetail {
  __typename: "PrivateRoomDetailOutput";
  ok: boolean;
  error: string | null;
  room: private_room_detail_query_privateRoomDetail_room | null;
}

export interface private_room_detail_query {
  privateRoomDetail: private_room_detail_query_privateRoomDetail;
}

export interface private_room_detail_queryVariables {
  privateRoomDetailInput: PrivateRoomDetailInput;
}
