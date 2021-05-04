import React from "react";
import AgencyMainTemplate from "../../../components/templates/AgencyMain";
import { useMe } from "../../../hooks/useMe";

const Agency: React.FC = () => {
  const { data } = useMe();
  return <AgencyMainTemplate isAgency={true} />;
};

export default Agency;
