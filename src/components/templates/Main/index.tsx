import React from "react";
import { withRouter } from "react-router";
import { Detail, Header, List, Map } from "../..";
import { useMe } from "../../../hooks/useMe";
import { ICardProps } from "../../../interfaces/Card";
import { locationMutation_filteredLocation_locations } from "../../../__generated__/locationMutation";
import Search from "../../organisms/Search";

interface IMain {
  logged: boolean;
  name: string;
  point?: locationMutation_filteredLocation_locations[];
  rooms: ICardProps[];
  params?: string;
  count: number;
}

const Main: React.FC<IMain> = ({ logged, name, point, params, count }) => {
  const { data } = useMe();
  return (
    <div className={"w-full h-600  flex flex-col sm:flex-row  mt-80"}>
      <Map point={point} />

      {params ? (
        <Detail id={+params} userId={data?.me.id} />
      ) : (
        <List count={count} />
      )}
    </div>
  );
};

export default Main;
