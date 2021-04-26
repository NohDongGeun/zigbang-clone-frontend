import React from "react";
import { Button } from "../../..";

interface IHeaderItem {
  url: string;
  name: string;
}

const HeaderItem: React.FC<IHeaderItem> = ({ url, name }) => {
  return (
    <li
      className={
        "p-3 sm:w-32 md:w-36 flex-initial hidden md:flex justify-center"
      }
    >
      <Button
        className={
          "font-bold text-lg text-gray-700 hover:text-yellow-400 focus:text-yellow-400 "
        }
        to={url}
        label={name}
      />
    </li>
  );
};

export default HeaderItem;
