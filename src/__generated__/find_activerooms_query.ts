/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DealType, RoomType } from "./globalTypes";

// ====================================================
// GraphQL query operation: find_activerooms_query
// ====================================================

export interface find_activerooms_query_findActiveRooms_unActiveRooms_point {
  __typename: "geometryTypes";
  coordinates: number[];
}

export interface find_activerooms_query_findActiveRooms_unActiveRooms {
  __typename: "Room";
  id: number;
  dealType: DealType;
  roomType: RoomType;
  floor: number;
  exclusiveArea: number;
  expense: number;
  title: string;
  images: string[];
  rent: number;
  deposit: number;
  point: find_activerooms_query_findActiveRooms_unActiveRooms_point;
}

export interface find_activerooms_query_findActiveRooms_activeRooms_point {
  __typename: "geometryTypes";
  coordinates: number[];
}

export interface find_activerooms_query_findActiveRooms_activeRooms {
  __typename: "Room";
  id: number;
  dealType: DealType;
  roomType: RoomType;
  floor: number;
  exclusiveArea: number;
  expense: number;
  title: string;
  images: string[];
  rent: number;
  deposit: number;
  point: find_activerooms_query_findActiveRooms_activeRooms_point;
}

export interface find_activerooms_query_findActiveRooms {
  __typename: "FindActiveRoomOutput";
  ok: boolean;
  error: string | null;
  unActiveRooms: find_activerooms_query_findActiveRooms_unActiveRooms[] | null;
  activeRooms: find_activerooms_query_findActiveRooms_activeRooms[] | null;
}

export interface find_activerooms_query {
  findActiveRooms: find_activerooms_query_findActiveRooms;
}
