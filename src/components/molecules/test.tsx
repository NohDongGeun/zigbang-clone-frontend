import React from "react";
import Button from "../atoms/Button";
import Heading from "../atoms/Heading";

const Test: React.FC = () => {
  return (
    <Button
      canClick={false}
      label={"asdasd"}
      className={"bg-yellow-300 "}
      unableClassName={"bg-gray-600 rounded-xl"}
    ></Button>
  );
};
export default Test;
