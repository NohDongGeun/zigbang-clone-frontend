/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PasswordEmailInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: findPasswordMutation
// ====================================================

export interface findPasswordMutation_passwordEmail {
  __typename: "PasswordEmailOutput";
  ok: boolean;
  error: string | null;
}

export interface findPasswordMutation {
  passwordEmail: findPasswordMutation_passwordEmail;
}

export interface findPasswordMutationVariables {
  passwordEmailInput: PasswordEmailInput;
}
