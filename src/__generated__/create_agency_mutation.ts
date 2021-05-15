/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateAgencyInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: create_agency_mutation
// ====================================================

export interface create_agency_mutation_createAgency {
  __typename: "CreateAgencyOutput";
  ok: boolean;
  error: string | null;
}

export interface create_agency_mutation {
  createAgency: create_agency_mutation_createAgency;
}

export interface create_agency_mutationVariables {
  createAgencyInput: CreateAgencyInput;
}
