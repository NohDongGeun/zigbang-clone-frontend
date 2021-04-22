import React from "react";
import { Header } from "../..";
import NotAgencyBox from "../../molecules/Agency/NotAgencyBox";

interface IAgencyRegister {
  name: string;
  logged: boolean;
}

const AgencyMainTemplate: React.FC<IAgencyRegister> = ({ logged, name }) => {
  return (
    <div className={"h-screen w-screen flex flex-col "}>
      <div className={"w-full"}>
        <Header
          logged={logged}
          name={name}
          showNav={false}
          handleSideNav={console.log}
          isAgent={true}
        />
      </div>
      <div className={"flex h-full justify-center items-center"}>
        <NotAgencyBox />
      </div>
    </div>
  );
};

export default AgencyMainTemplate;
