import React from "react";
import { Heading } from "../../..";

interface IRoomHeading {
  /**
   * header label
   */
  label: string;
}

const RoomHeading: React.FC<IRoomHeading> = ({ label }) => {
  return (
    <Heading
      Type={"h2"}
      className={"w-full py-5 text-gray-700 font-semibold text-xl"}
      label={label}
    />
  );
};

export default RoomHeading;
