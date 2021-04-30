/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateZzimInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: zzim_mutation
// ====================================================

export interface zzim_mutation_createZzim {
  __typename: "CreateZzimOutput";
  ok: boolean;
  error: string | null;
}

export interface zzim_mutation {
  createZzim: zzim_mutation_createZzim;
}

export interface zzim_mutationVariables {
  createZzimInput: CreateZzimInput;
}
