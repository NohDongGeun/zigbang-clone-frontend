import React from "react";
import { withRouter } from "react-router";
import { Detail, Header, List, Map } from "../..";
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
  return (
    <div
      className={"w-full h-600 bg-gray-900 flex flex-col sm:flex-row  mt-80"}
    >
      <Map point={point} />

      {params ? <Detail id={+params} /> : <List count={count} />}
    </div>
  );
};

export default Main;
