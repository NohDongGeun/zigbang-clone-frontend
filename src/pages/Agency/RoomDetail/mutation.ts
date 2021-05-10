import { gql } from "@apollo/client";

export const ISAGENCY_QUERY = gql`
  query isAgency_query($isAgencyInput: IsAgencyInput!) {
    isAgency(input: $isAgencyInput) {
      ok
      error
    }
  }
`;



export const ROOM_DETAIL_QUERY = gql`
  query room_detail_guery($roomDetailInput: RoomDetailInput!) {
    roomDetail(input: $roomDetailInput) {
      ok
      error
      room {
        id
        roomType
        dealType
        floor
        buildingFloor
        options {
          id
        }
        expense
        expenses {
          id
        }
        deposit
        rent
        isParking
        posibleMove
        exclusiveArea
        supplyArea
        content
        title
        address
        point {
          coordinates
        }
        images
        s3Code
      }
    }
  }
`;
