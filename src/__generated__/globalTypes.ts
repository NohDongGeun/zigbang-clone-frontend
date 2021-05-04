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

export enum Verify {
  checking = "checking",
  no = "no",
  verified = "verified",
}

export interface CreateAccountInput {
  email: string;
  name: string;
  password: string;
}

export interface CreateLocationInput {
  lat: number;
  lon: number;
}

export interface CreateRoomInput {
  isParking: boolean;
  rent: number;
  deposit: number;
  posibleMove: string;
  supplyArea: number;
  exclusiveArea: number;
  floor: number;
  buildingFloor: number;
  address: string;
  title: string;
  content: string;
  images: string[];
  expense: number;
  roomType: RoomType;
  dealType: DealType;
}

export interface CreateVerifyInput {
  phone: string;
}

export interface CreateZzimInput {
  roomId: number;
}

export interface EditProfileInput {
  name?: string | null;
  password?: string | null;
  newPassword?: string | null;
}

export interface FindIdPhoneInput {
  phone: string;
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

export interface LoginInput {
  email: string;
  password: string;
}

export interface OptionsExpensesInput {
  optionsIds?: number[] | null;
  expensesIds?: number[] | null;
}

export interface PasswordEmailInput {
  email: string;
}

export interface RoomDetailInput {
  roomId: number;
  userId?: number | null;
}

export interface SendSmsInput {
  agencyId: number;
  roomId: number;
}

export interface VerifyUserInput {
  code: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
