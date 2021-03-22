import React from "react";
import { Heading, Img, Text } from "../..";
import emptyImg from "../../../assets/img/empty.png"

const Empty: React.FC = () => {
  return (
    <section className={"flex flex-1 flex-col justify-center items-center"}>
      <Img
        className={"w-24 h-24"}
        src={emptyImg}
        alt={"검색 조건에 맞는 매물이 없습니다"}
      />
      <Heading
        className={"text-xl font-bold text-black my-3"}
        Type={"h2"}
        label={"검색 조건에 맞는 매물이 없습니다"}
      />
      <Text
        className={"text-xs sm:text-sm"}
        label={"매매/전월세 설정과 필터값을 변경해보세요."}
      />
    </section>
  );
};

export default Empty;
