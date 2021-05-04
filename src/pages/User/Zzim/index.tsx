import { gql, useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { searchLocationVar, sidebarVar } from "../../../apollo";
import { Loading } from "../../../components";
import MyRoomTemplate from "../../../components/templates/MyRoomsTemplate";
import { find_zzim_query } from "../../../__generated__/find_zzim_query";

export const FIND_ZZIM_QUERY = gql`
  query find_zzim_query {
    findZzimRooms {
      ok
      error
      rooms {
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

const Zzim: React.FC = () => {
  const { loading, data, error } = useQuery<find_zzim_query>(FIND_ZZIM_QUERY);
  const history = useHistory();
  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleCard = (point: number[], id: number) => {
    sidebarVar(false);
    history.push(`/room/${id}`);
    searchLocationVar([point[1].toString(), point[0].toString()]);
  };

  if (loading) return <Loading />;
  return (
    <>
      {data?.findZzimRooms.rooms && (
        <MyRoomTemplate
          handleCard={handleCard}
          rooms={data.findZzimRooms.rooms}
        />
      )}
    </>
  );
};

export default Zzim;
