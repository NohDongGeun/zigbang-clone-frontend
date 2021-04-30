/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SendSmsInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: send_sms_mutation
// ====================================================

export interface send_sms_mutation_sendSmsAgency {
  __typename: "SendSmsOutput";
  ok: boolean;
  error: string | null;
}

export interface send_sms_mutation {
  sendSmsAgency: send_sms_mutation_sendSmsAgency;
}

export interface send_sms_mutationVariables {
  sendSmsInput: SendSmsInput;
}
