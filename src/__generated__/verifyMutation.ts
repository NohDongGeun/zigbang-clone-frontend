/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateVerifyInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: verifyMutation
// ====================================================

export interface verifyMutation_createVerify {
  __typename: "CreateVerifyOutput";
  ok: boolean;
  error: string | null;
}

export interface verifyMutation {
  createVerify: verifyMutation_createVerify;
}

export interface verifyMutationVariables {
  createVerifyInput: CreateVerifyInput;
}
