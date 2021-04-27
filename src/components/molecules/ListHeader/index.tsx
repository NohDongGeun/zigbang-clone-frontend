import React from "react";
import { Link } from "react-router-dom";
import { Button, Heading, Img } from "../..";

interface IListHeader {
  isDetail: boolean;
  isRoadview?: boolean;
  src?: string;
  label: string;
  alt?: string;
  onClick?: () => void;
  handleUnit: () => void | null;
}

const ListHeader: React.FC<IListHeader> = ({
  isDetail,
  label,
  handleUnit,
  onClick,
  isRoadview,
  src,
  alt,
}) => {
  return (
    <section
      className={"w-full flex flex-row p-4 bg-white"}
    >
      <div className={"flex flex-auto  flex-row justify-start items-center"}>
        {isDetail && src && alt && (
          <Button onClick={onClick}>
            <Img className={"w-6 h-6 sm:w-7 sm:h-7 mr-2"} src={src} alt={alt} />
          </Button>
        )}
        <Heading
          className={"text-lg sm:text-xl text-black"}
          Type={"h1"}
          label={label}
        />
      </div>
      <div className={`flex flex-auto flex-row justify-end items-center `}>
        <Button
          className={`text-sm sm:text-base text-black ${
            isRoadview && "hidden"
          } `}
          label={"단위"}
          onClick={handleUnit}
        />
      </div>
    </section>
  );
};

export default ListHeader;
