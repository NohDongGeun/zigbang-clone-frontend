/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DeleteRoomInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: delete_room_mutation
// ====================================================

export interface delete_room_mutation_deleteRoom {
  __typename: "DeleteRoomOutput";
  ok: boolean;
  error: string | null;
}

export interface delete_room_mutation {
  deleteRoom: delete_room_mutation_deleteRoom;
}

export interface delete_room_mutationVariables {
  deleteRoomInput: DeleteRoomInput;
}
