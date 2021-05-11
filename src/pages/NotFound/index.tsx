import React from "react";
import { Heading, Button } from "../../components";

interface INotFound {
  errorMessage: string;
  pathLabel: string;
  path: string;
}

const NotFound: React.FC<INotFound> = ({ errorMessage, pathLabel, path }) => {
  return (
    <div
      className={
        "flex flex-col justify-center items-center flex-1 h-full bg-white "
      }
    >
      <Heading
        className={"font-bold text-xl sm:text-2xl mb-3"}
        Type={"h1"}
        label={errorMessage}
      />
      <Button
        className={
          "border border-blue-dark bg-blue-dark py-3 px-6 font-semibold text-white rounded-lg mt-3 text-lg sm:text-xl hover:opacity-75"
        }
        to={path}
        label={pathLabel}
      />
    </div>
  );
};

export default NotFound;
