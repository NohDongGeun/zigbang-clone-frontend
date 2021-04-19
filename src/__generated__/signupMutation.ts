/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateAccountInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: signupMutation
// ====================================================

export interface signupMutation_createAccount {
  __typename: "CreateAccountOutput";
  token: string | null;
  ok: boolean;
  error: string | null;
}

export interface signupMutation {
  createAccount: signupMutation_createAccount;
}

export interface signupMutationVariables {
  createAcountInput: CreateAccountInput;
}
