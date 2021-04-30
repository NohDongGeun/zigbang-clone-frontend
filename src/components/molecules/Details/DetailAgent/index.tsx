import React from "react";
import DetailBar from "../DetailBar";
import { Heading, Img, Text } from "../../..";
import test_people from "../../../../assets/img/test_people.png";

interface IDetailAgent {
  name: string;
  img: string;
  phone: string;
}

const DetailAgent: React.FC<IDetailAgent> = ({ name, img, phone }) => {
  return (
    <section className={"flex flew-row  bg-white w-full mb-3 "}>
      <div
        className={"flex flex-grow-0 flex-shrink-0 p-3 min-w-14 sm:min-w-16"}
      >
        <Img
          src={test_people}
          alt={name}
          className={"sm:w-16 sm:h-16 w-14 h-14 rounded-full"}
        />
      </div>
      <div
        className={
          "flex flex-col flex-grow-0 w-680 sm:w-760 flex-shrink-0 justify-center items-start"
        }
      >
        <Heading
          Type={"h2"}
          className={
            "w-full font-bold sm:text-lg text-base truncate whitespace-nowrap"
          }
          label={name}
        />
        <Text
          label={`대표번호: ${phone}`}
          className={"sm:text-sm text-xs text-gray-800"}
        />
      </div>
    </section>
  );
};

export default DetailAgent;
