/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DealType, RoomType } from "./globalTypes";

// ====================================================
// GraphQL query operation: find_zzim_query
// ====================================================

export interface find_zzim_query_findZzimRooms_rooms_point {
  __typename?: "geometryTypes";
  coordinates: number[];
}

export interface find_zzim_query_findZzimRooms_rooms {
  __typename: "Room";
  id: number;
  dealType: DealType;
  roomType: RoomType;
  floor: number;
  exclusiveArea: number;
  expense: number;
  text: string;
  images: string[];
  rent: number;
  deposit: number;
  point: find_zzim_query_findZzimRooms_rooms_point;
}

export interface find_zzim_query_findZzimRooms {
  __typename: "FindZzimOutput";
  ok: boolean;
  error: string | null;
  rooms: find_zzim_query_findZzimRooms_rooms[] | null;
}

export interface find_zzim_query {
  findZzimRooms: find_zzim_query_findZzimRooms;
}
