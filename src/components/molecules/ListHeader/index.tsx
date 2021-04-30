import React from "react";
import { Link } from "react-router-dom";
import { Button, Heading, Img } from "../..";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface IListHeader {
  isDetail: boolean;
  isRoadview?: boolean;
  src?: string;
  label: string;
  alt?: string;
  onClick?: () => void;
  handleHeart?: () => void;
  handleUnHeart?: () => void;
  handleUnit: () => void | null;
  isHeart?: boolean;
}

const ListHeader: React.FC<IListHeader> = ({
  isDetail,
  label,
  handleUnit,
  onClick,
  isRoadview,
  src,
  alt,
  isHeart,
  handleHeart,
  handleUnHeart,
}) => {
  return (
    <section className={"w-full flex flex-row p-4 bg-white"}>
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
        {isDetail && (
          <>
            {isHeart ? (
              <Button onClick={handleUnHeart} className={"mr-5"}>
                <AiFillHeart className={"text-red-500"} size={"27"} />
              </Button>
            ) : (
              <Button onClick={handleHeart} className={"mr-5"}>
                <AiOutlineHeart className={"text-gray-300"} size={"27"} />
              </Button>
            )}
          </>
        )}
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
