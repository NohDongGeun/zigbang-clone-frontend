/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { FindLocationInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: locationMutation
// ====================================================

export interface locationMutation_filteredLocation_locations_point {
  __typename: "geometryTypes";
  coordinates: number[];
}

export interface locationMutation_filteredLocation_locations {
  __typename: "Location";
  point: locationMutation_filteredLocation_locations_point;
}

export interface locationMutation_filteredLocation {
  __typename: "FindLocationOutput";
  ok: boolean;
  error: string | null;
  locations: locationMutation_filteredLocation_locations[] | null;
}

export interface locationMutation {
  filteredLocation: locationMutation_filteredLocation;
}

export interface locationMutationVariables {
  findLocationInput: FindLocationInput;
}
