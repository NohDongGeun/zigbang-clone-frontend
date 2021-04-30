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
