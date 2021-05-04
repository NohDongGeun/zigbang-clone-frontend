/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateLocationInput, OptionsExpensesInput, CreateRoomInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: create_room_mutation
// ====================================================

export interface create_room_mutation_createRoom {
  __typename: "CreateRoomOutput";
  ok: boolean;
  error: string | null;
}

export interface create_room_mutation {
  createRoom: create_room_mutation_createRoom;
}

export interface create_room_mutationVariables {
  inputLocation: CreateLocationInput;
  inputOpEx: OptionsExpensesInput;
  input: CreateRoomInput;
}
