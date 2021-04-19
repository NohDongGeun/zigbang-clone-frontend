/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { FindIdPhoneInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: findIdMutation
// ====================================================

export interface findIdMutation_findIdPhone {
  __typename: "FindIdPhoneOutput";
  ok: boolean;
  error: string | null;
}

export interface findIdMutation {
  findIdPhone: findIdMutation_findIdPhone;
}

export interface findIdMutationVariables {
  findIdPhoneInput: FindIdPhoneInput;
}
