import React from "react";
import { Detail, Header, List, Map } from "../..";
import { ICardProps } from "../../../interfaces/Card";
import { locationMutation_filteredLocation_locations } from "../../../__generated__/locationMutation";

interface IMain {
  logged: boolean;
  name: string;
  point?: locationMutation_filteredLocation_locations[];
  rooms: ICardProps[];
  params?: number;
  count: number;
  pageHandler: () => void;
}

const Main: React.FC<IMain> = ({
  logged,
  name,
  point,
  rooms,
  params,
  count,
  pageHandler,
}) => {
  return (
    <div className={"h-screen w-screen flex flex-col"}>
      <div className={"w-full"}>
        <Header logged={logged} name={name} />
      </div>
      <div className={"flex flex-row h-full"}>
        <Map point={point} />
        {params ? (
          <Detail id={params} />
        ) : (
          <List rooms={rooms} count={count} pageHandler={pageHandler} />
        )}
      </div>
    </div>
  );
};

export default Main;
