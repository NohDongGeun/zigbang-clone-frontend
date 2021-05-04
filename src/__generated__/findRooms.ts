/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { FindRoomsInput, DealType, RoomType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: findRooms
// ====================================================

export interface findRooms_findRooms_rooms {
  __typename: "Room";
  id: number;
  dealType: DealType;
  roomType: RoomType;
  rent: number;
  deposit: number;
  title: string;
  exclusiveArea: number;
  address: string;
  floor: number;
  images: string[];
}

export interface findRooms_findRooms {
  __typename: "FindRoomsOutput";
  ok: boolean;
  error: string | null;
  rooms: findRooms_findRooms_rooms[];
}

export interface findRooms {
  findRooms: findRooms_findRooms;
}

export interface findRoomsVariables {
  findRoomsInput: FindRoomsInput;
}
