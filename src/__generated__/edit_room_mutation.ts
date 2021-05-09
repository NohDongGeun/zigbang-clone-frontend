/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OptionsExpensesInput, EditRoomInput, CreateLocationInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: edit_room_mutation
// ====================================================

export interface edit_room_mutation_editRoom {
  __typename: "EditRoomOutput";
  ok: boolean;
  error: string | null;
}

export interface edit_room_mutation {
  editRoom: edit_room_mutation_editRoom;
}

export interface edit_room_mutationVariables {
  optionsExpensesInput: OptionsExpensesInput;
  editRoomInput: EditRoomInput;
  createLocationInput: CreateLocationInput;
}
