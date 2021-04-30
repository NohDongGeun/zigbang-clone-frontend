/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateZzimInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: delete_zzim_mutation
// ====================================================

export interface delete_zzim_mutation_deleteZzim {
  __typename: "CreateZzimOutput";
  ok: boolean;
  error: string | null;
}

export interface delete_zzim_mutation {
  deleteZzim: delete_zzim_mutation_deleteZzim;
}

export interface delete_zzim_mutationVariables {
  createZzimInput: CreateZzimInput;
}
