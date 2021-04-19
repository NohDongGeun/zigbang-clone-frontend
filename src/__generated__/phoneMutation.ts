/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { VerifyUserInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: phoneMutation
// ====================================================

export interface phoneMutation_verifyPhone {
  __typename: "VerifyUserOutput";
  ok: boolean;
  error: string | null;
}

export interface phoneMutation {
  verifyPhone: phoneMutation_verifyPhone;
}

export interface phoneMutationVariables {
  verifyUserInput: VerifyUserInput;
}
