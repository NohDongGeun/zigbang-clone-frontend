import React, { useEffect, useRef, useState } from "react";
import { Card, Empty } from "../..";
import ListHeader from "../../molecules/ListHeader";
import { ICardProps } from "../../../interfaces/Card";

interface IList {
  /**
   * 방 정보들
   */
  rooms: ICardProps[];

  /**
   * 지역목록의 방 갯수
   */
  count: number;

  /**
   * list page handler
   */
  pageHandler: () => void;
}

const List: React.FC<IList> = ({ rooms, count, pageHandler }) => {
  const [unit, setUnit] = useState<boolean>(false);
  const scroll = useRef<HTMLDivElement>(null);

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    if (scroll.current === null) {
      return;
    }
    const scrollHeight = scroll.current.scrollHeight;
    const scrollTop = scroll.current.scrollTop;
    const clientHeight = scroll.current.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
      pageHandler();
    }
  };

  useEffect(() => {
    // scroll event listener 등록
    window.addEventListener("scroll", handleScroll);
    return () => {
      // scroll event listener 해제
      window.removeEventListener("scroll", handleScroll);
    };
  });

  //단위 handler
  const handleUnit = () => {
    setUnit(!unit);
  };

  return (
    <article className={"w-full sm:w-400 flex flex-col h-full justify-start"}>
      <div className={"w-full"}>
        <ListHeader
          isDetail={false}
          label={`지역목록${count}개`}
          handleUnit={handleUnit}
        />
      </div>
      <div
        ref={scroll}
        className={"flex flex-col h-620 overflow-y-auto bg-gray-300"}
      >
        {count !== 0 ? (
          rooms.map((room, i) => {
            return <Card unitChange={unit} {...room} key={i} />;
          })
        ) : (
          <Empty />
        )}
      </div>
    </article>
  );
};

export default List;
