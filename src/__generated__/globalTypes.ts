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

export interface ChangeActiveInput {
  roomId: number;
  active: boolean;
}

export interface CreateAccountInput {
  email: string;
  name: string;
  password: string;
}

export interface CreateAgencyInput {
  name: string;
  agent: string;
  address: string;
  image: string;
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
  secretAddress: string;
  title: string;
  content: string;
  images: string[];
  s3Code: string;
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

export interface DeleteRoomInput {
  roomId: number;
}

export interface EditProfileInput {
  name?: string | null;
  password?: string | null;
  newPassword?: string | null;
}

export interface EditRoomInput {
  isParking?: boolean | null;
  rent?: number | null;
  deposit?: number | null;
  posibleMove?: string | null;
  supplyArea?: number | null;
  exclusiveArea?: number | null;
  floor?: number | null;
  buildingFloor?: number | null;
  address?: string | null;
  secretAddress?: string | null;
  title?: string | null;
  content?: string | null;
  images?: string[] | null;
  s3Code?: string | null;
  expense?: number | null;
  roomType?: RoomType | null;
  dealType?: DealType | null;
  roomId: number;
  deleteImages?: string[] | null;
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

export interface PrivateRoomDetailInput {
  roomId: number;
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
