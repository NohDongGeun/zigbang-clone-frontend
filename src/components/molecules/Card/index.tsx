import React from "react";
import { Link } from "react-router-dom";
import { Img, Heading, Text } from "../..";
import { useRoomType } from "../../../hooks/useRoomType";
import { ICardProps } from "../../../interfaces/Card";
import "./styles.css";

const Card: React.FC<ICardProps> = ({
  dealType,
  roomType,
  rent,
  deposit,
  title,
  exclusiveArea,
  address,
  secretAddress,
  floor,
  image,
  id,
  unitChange = true,
}) => {
  return (
    <section className={"flex bg-white"}>
      <Link
        to={`/room/${id}`}
        className={
          "flex flex-row px-4 sm:px-2 md:px-4 w-full hover:bg-gray-200 "
        }
      >
        <div className={"flex w-36 sm:w-2/5 square relative"}>
          <div
            className={
              "absolute w-full h-full bg-contain  bg-no-repeat bg-center"
            }
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        </div>
        <div className={"flex flex-col w-3/5 justify-center items-start px-3"}>
          <Text
            label={useRoomType(roomType)}
            className={"font-bold text-sm text-gray-500"}
          />
          <Heading
            label={
              dealType === "month"
                ? `월세 ${deposit}/${rent}`
                : `전세 ${deposit}`
            }
            className={"font-bold lg:text-lg text-base"}
            Type={"h2"}
          />
          <Text
            label={
              unitChange
                ? `${exclusiveArea}㎡ · ${floor}층`
                : `${Math.round(exclusiveArea / 3.306)}평 · ${floor}층`
            }
            className={"font-medium text-sm text-gray-700"}
          />
          <Text
            label={secretAddress}
            className={
              "font-medium text-sm text-gray-700 truncate  whitespace-nowrap w-full"
            }
          />
          <Text
            label={title}
            className={
              "font-semibold text-sm text-gray-500 truncate whitespace-nowrap w-full"
            }
          />
        </div>
      </Link>
    </section>
  );
};

export default Card;
