import React from "react";
import { Button, Heading, Img, Text } from "../../..";
import emptyImg from "../../../../assets/img/empty.png";

const NoDetail: React.FC = () => {
  return (
    <article
      className={
        "w-full sm:w-340 md:w-400  flex flex-col h-full justify-start bg-white "
      }
    >
      <section className={"flex flex-1 flex-col justify-center items-center"}>
        <Img className={"w-24 h-24"} src={emptyImg} alt={"없는 매물 입니다."} />
        <Heading
          className={"text-xl font-bold text-black my-3"}
          Type={"h2"}
          label={"매물 정보를 찾을 수 없습니다."}
        />
        <Button
          to={"/"}
          label={"방 찾기"}
          className={
            "py-2 px-5 font-bold bg-blue-dark border border-blue-dark text-lg text-white rounded-lg mt-3"
          }
        />
      </section>
    </article>
  );
};

export default NoDetail;
