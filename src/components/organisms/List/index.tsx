import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Card, Empty, Loading } from "../..";
import ListHeader from "../../molecules/ListHeader";
import { ICardProps } from "../../../interfaces/Card";
import { gql, useMutation, useReactiveVar } from "@apollo/client";
import {
  findRooms,
  findRoomsVariables,
  findRooms_findRooms_rooms,
} from "../../../__generated__/findRooms";
import { filterVar, locationVar } from "../../../apollo";

export const ROOMS_MUTATION = gql`
  mutation findRooms($findRoomsInput: FindRoomsInput!) {
    findRooms(input: $findRoomsInput) {
      ok
      error
      rooms {
        id
        dealType
        roomType
        rent
        deposit
        title
        exclusiveArea
        address
        secretAddress
        floor
        images
      }
    }
  }
`;

interface IList {
  /**
   * 지역목록의 방 갯수
   */
  count: number;
}

const List: React.FC<IList> = ({ count }) => {
  const [unit, setUnit] = useState<boolean>(false);
  const page = useRef<number>(1);
  const roomCount = useRef<number>(0);
  const location = useReactiveVar(locationVar);
  const filter = useReactiveVar(filterVar);
  const scroll = useRef<HTMLDivElement>(null);
  const scrollLocation = useRef<number>(0);
  const [rooms, setRooms] = useState<findRooms_findRooms_rooms[]>([]);
  const onCompleted = (data: findRooms) => {
    const {
      findRooms: { rooms },
    } = data;

    if (rooms) {
      setRooms((prev) => [...prev, ...rooms]);
    }
    return;
  };

  const [findRooms, { loading, error, data }] = useMutation<
    findRooms,
    findRoomsVariables
  >(ROOMS_MUTATION, { onCompleted });

  const roomsMutation = () => {
    if (!loading) {
      findRooms({
        variables: {
          findRoomsInput: { page: page.current, ...filter, ...location },
        },
      });
    }
  };
  useEffect(() => {
    setRooms([]);
    page.current = 1;
    roomsMutation();
  }, [filter, location]);

  // 스크롤 이벤트 핸들러

  useEffect(() => {
    // scroll event listener 등록
    const handleScroll = () => {
      if (scroll.current === null) {
        return;
      }
      const scrollHeight = scroll.current.scrollHeight;
      const scrollTop = scroll.current.scrollTop;
      const clientHeight = scroll.current.clientHeight;

      if (
        scrollTop + clientHeight === scrollHeight ||
        scrollTop + clientHeight > scrollHeight - 0.5
      ) {
        if (roomCount.current !== count) {
          page.current = page.current + 1;
          scrollLocation.current = clientHeight;
          roomsMutation();
        }
      }
    };

    scroll.current?.addEventListener("scroll", handleScroll, false);
    return () => {
      // scroll event listener 해제
      scroll.current?.removeEventListener("scroll", handleScroll, false);
    };
  });

  //단위 handler
  const handleUnit = () => {
    setUnit(!unit);
  };

  return (
    <article
      className={
        "md:w-400 sm:w-340 flex flex-col h-full flex-1 sm:flex-initial justify-start bg-white"
      }
    >
      <div className={"w-full "}>
        <ListHeader
          isDetail={false}
          label={`지역목록${count}개`}
          handleUnit={handleUnit}
        />
      </div>

      <div
        ref={scroll}
        className={
          "flex flex-col flex-grow-0 h-620 overflow-y-auto  bg-primary relative"
        }
      >
        <div
          className={
            "absolute h-full flex flex-col transform  translate-y-0 w-full"
          }
        >
          {rooms && count !== 0 ? (
            rooms.map((room, i) => {
              return (
                <Card
                  unitChange={unit}
                  image={room.images[0]}
                  {...room}
                  key={i}
                />
              );
            })
          ) : (
            <Empty />
          )}
        </div>
      </div>
    </article>
  );
};

export default List;
