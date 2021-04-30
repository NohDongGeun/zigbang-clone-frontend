import React from "react";
import { Button, Heading } from "../../..";

const NotAgencyBox: React.FC = () => {
  return (
    <article
      className={
        "flex flex-grow-0 flex-shrink-0 w-80  sm:flex-1 items-center justify-center px-2 sm:px-0"
      }
    >
      <div className={"flex flex-col"}>
        <Heading
          className={
            "w-full font-bold sm:px-3  text-gray-400 text-lg sm:text-2xl mb-10"
          }
          Type={"h1"}
          label={"중개사무소 회원이 아닙니다."}
        />
        <Button
          className={
            "w-full border   px-2 py-3 sm:px-3 sm:py-5 font-bold text-lg sm:text-xl text-white bg-blue-dark rounded-lg text-center hover:opacity-75"
          }
          to={"/login"}
          label={"중개사무소 회원가입 신청하기"}
        />
      </div>
    </article>
  );
};

export default NotAgencyBox;
