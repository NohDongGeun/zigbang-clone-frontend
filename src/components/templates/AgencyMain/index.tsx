import React from "react";
import { Header } from "../..";
import NotAgencyBox from "../../molecules/Agency/NotAgencyBox";

const AgencyMainTemplate: React.FC = () => {
  return (
    <div
      className={
        "w-full h-600 bg-white flex flex-col md:flex-row  mt-64 md:mt-80"
      }
    >
      <div className={"flex w-full h-full justify-center items-center"}>
        <NotAgencyBox />
      </div>
    </div>
  );
};

export default AgencyMainTemplate;
