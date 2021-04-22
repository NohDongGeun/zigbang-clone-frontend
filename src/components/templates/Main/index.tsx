import React from "react";
import { withRouter } from "react-router";
import { Detail, Header, List, Map } from "../..";
import { ICardProps } from "../../../interfaces/Card";
import { locationMutation_filteredLocation_locations } from "../../../__generated__/locationMutation";

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
    <div className={"h-screen w-screen flex flex-col "}>
      <div className={"w-full"}>
        <Header
          logged={logged}
          name={name}
          handleSideNav={console.log}
          showNav={true}
          isAgent={false}
        />
      </div>
      <div className={"flex flex-col md:flex-row h-full mt-64 md:mt-80"}>
        <Map point={point} />
        {params ? <Detail id={+params} /> : <List count={count} />}
      </div>
    </div>
  );
};

export default Main;
