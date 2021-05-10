/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ChangeActiveInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: room_active_mutation
// ====================================================

export interface room_active_mutation_changeActive {
  __typename: "ChangeActiveOutput";
  ok: boolean;
  error: string | null;
}

export interface room_active_mutation {
  changeActive: room_active_mutation_changeActive;
}

export interface room_active_mutationVariables {
  changeActiveInput: ChangeActiveInput;
}
