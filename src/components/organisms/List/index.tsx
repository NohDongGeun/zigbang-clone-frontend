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
        text
        exclusiveArea
        address
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
  const location = useReactiveVar(locationVar);
  const filter = useReactiveVar(filterVar);
  const scroll = useRef<HTMLDivElement>(null);
  const [rooms, setRooms] = useState<findRooms_findRooms_rooms[]>([]);
  const onCompleted = (data: findRooms) => {
    const {
      findRooms: { rooms },
    } = data;

    if (rooms) {
      return setRooms((prev) => [...prev, ...rooms]);
    }
    return;
  };

  const [findRooms, { loading, error, data }] = useMutation<
    findRooms,
    findRoomsVariables
  >(ROOMS_MUTATION, { onCompleted });

  const roomsMutation = useCallback(() => {
    if (!loading) {
      findRooms({
        variables: {
          findRoomsInput: { page: page.current, ...filter, ...location },
        },
      });
    }
  }, [filter, location]);

  useEffect(() => {
    setRooms([]);
    page.current = 1;
    roomsMutation();
  }, [roomsMutation]);

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
      console.log(scrollHeight, scrollTop, clientHeight);
      if (scrollTop + clientHeight === scrollHeight) {
        return;
      }
      if (scrollTop + clientHeight > scrollHeight - 0.5) {
        page.current = page.current + 1;
        roomsMutation();
      }
    };

    scroll.current?.addEventListener("scroll", handleScroll, false);
    return () => {
      // scroll event listener 해제
      scroll.current?.removeEventListener("scroll", handleScroll, false);
    };
  }, [scroll, roomsMutation]);

  //단위 handler
  const handleUnit = () => {
    setUnit(!unit);
  };

  return (
    <article
      className={
        "md:w-400 sm:w-340 flex flex-col h-full justify-start bg-white"
      }
    >
      <div className={"w-full "}>
        <ListHeader
          isDetail={false}
          label={`지역목록${count}개`}
          handleUnit={handleUnit}
        />
      </div>
      {loading ? (
        <Loading />
      ) : (
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
      )}
    </article>
  );
};

export default List;
