import { gql, useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { Loading } from "../../../components";
import AgencyMainTemplate from "../../../components/templates/AgencyMain";
import { useMe } from "../../../hooks/useMe";
import { find_activerooms_query } from "../../../__generated__/find_activerooms_query";

export const FIND_ACTIVEROOMS_QUERY = gql`
  query find_activerooms_query {
    findActiveRooms {
      ok
      error
      unActiveRooms {
        id
        dealType
        roomType
        floor
        exclusiveArea
        expense
        title
        images
        rent
        deposit
        point {
          coordinates
        }
      }
      activeRooms {
        id
        dealType
        roomType
        floor
        exclusiveArea
        expense
        title
        images
        rent
        deposit
        point {
          coordinates
        }
      }
    }
  }
`;

const Agency: React.FC = () => {
  const { data, loading, error } = useQuery(FIND_ACTIVEROOMS_QUERY);
  const history = useHistory();

  const handleCard = (point: number[], id: number) => {
    history.push(`/agency/room/${id}`);
  };

  if (loading || error) return <Loading />;
  return (
    data.findActiveRooms && (
      <AgencyMainTemplate
        isAgency={true}
        rooms={data.findActiveRooms.activeRooms}
        unActiveRooms={data.findActiveRooms.unActiveRooms}
        handleCard={handleCard}
      />
    )
  );
};

export default Agency;
