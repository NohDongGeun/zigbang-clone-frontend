import {
  gql,
  useLazyQuery,
  useMutation,
  useQuery,
  useReactiveVar,
} from "@apollo/client";
import React, { useEffect, useState } from "react";
import { History } from "history";
import useReactRouter from "use-react-router";
import {
  DetailAgent,
  DetailExpenses,
  DetailHeader,
  DetailInfo,
  DetailOptions,
  DetailMap,
  DetailText,
  ListHeader,
  DetailRoadview,
  Loading,
} from "../..";
import { IDetailOption } from "../../../interfaces/Option";
import { roomDetail } from "../../../__generated__/roomDetail";
import arrowLeft from "../../../assets/img/arrow-left.png";
import xImg from "../../../assets/img/x_image.png";
import { RouteComponentProps, withRouter } from "react-router";
import {
  zzim_mutation,
  zzim_mutationVariables,
} from "../../../__generated__/zzim_mutation";
import { isLoggedInVar } from "../../../apollo";
import { ME_QUERY, useMe } from "../../../hooks/useMe";
import {
  delete_zzim_mutation,
  delete_zzim_mutationVariables,
} from "../../../__generated__/delete_zzim_mutation";

interface Agency {
  img: string;
  name: string;
  phone: string;
  wysiwyg: string;
  address: string;
}

interface IRoomDetail {
  /** 방 거래유형 */
  dealType: "전세" | "월세";

  /** 전세,보증금 */
  deposit: number;

  /** 월세 */
  rent?: number;

  /** 등록번호 */
  id: number;

  /**이미지 소스더미*/
  images?: string[];

  /** 소개글 */
  text: string;

  /** 구조 */
  structure: string;

  /** 면적 */
  exclusiveArea: number;

  /** 관리비 */
  expense: number;

  /** 주차가능 여부 */
  isParking: boolean;

  /** 엘리베이터 여부 */
  isElevator: boolean;

  /** 입주가능일 */
  posibleMove: string;

  /** 준공일 */
  completionDate: string;

  /** 층수 */
  floor: number;

  /** 건물 층수 */
  buildingFloor: number;
  /** 건물 주소 */
  address: string;
  /** 포함 옵션 */
  options: IDetailOption[];

  /** 관리비에 포함된 항목들 */
  expenseOptions?: IDetailOption[];

  /** room wysiwyg */
  wysiwyg: string;

  /** 부동산 */
  agency: Agency;
  /** 방 좌표 */
  point: number[];
}
export interface IRoom {
  room: IRoomDetail;
}
interface IDetail {
  id: number;
  userId?: number;
}

//param을 받으면 param으로 방을 검색해서 방을 받는다
//param으로 방이 error이면 error 표시 해주자
export const ROOM_QUERY = gql`
  query roomDetail($roomDetailInput: RoomDetailInput!) {
    roomDetail(input: $roomDetailInput) {
      ok
      error
      like
      room {
        id
        isParking
        point {
          coordinates
        }
        isElevator
        posibleMove
        exclusiveArea
        expense
        completionDate
        floor
        buildingFloor
        address
        text
        dealType
        rent
        deposit
        images
        agency {
          name
          phoneNum
          agent
        }
      }
    }
  }
`;

export const ZZIM_MUTATION = gql`
  mutation zzim_mutation($createZzimInput: CreateZzimInput!) {
    createZzim(input: $createZzimInput) {
      ok
      error
    }
  }
`;

export const DELETE_ZZIM_MUTATION = gql`
  mutation delete_zzim_mutation($createZzimInput: CreateZzimInput!) {
    deleteZzim(input: $createZzimInput) {
      ok
      error
    }
  }
`;

const Detail: React.FC<IDetail & RouteComponentProps> = ({
  id,
  history,
  userId,
}) => {
  const [unit, setUnit] = useState<boolean>(false);
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const [room, setRoom] = useState<any>(null);
  const [heart, setHeart] = useState<boolean>(false);
  const [roadview, setRoadview] = useState<boolean>(false);
  const { loading, data, error } = useQuery<roomDetail>(ROOM_QUERY, {
    variables: {
      roomDetailInput: {
        roomId: id,
        userId: userId,
      },
    },
  });
  const onCompletedZzim = (data: zzim_mutation) => {
    const {
      createZzim: { ok, error },
    } = data;
    if (ok) {
      return setHeart(true);
    }
    if (error) {
      console.log(error);
    }
  };
  const [zzim_mutation] = useMutation<zzim_mutation, zzim_mutationVariables>(
    ZZIM_MUTATION,
    {
      onCompleted: onCompletedZzim,
      refetchQueries: [
        {
          query: ROOM_QUERY,
          variables: {
            roomDetailInput: {
              roomId: id,
              userId: userId,
            },
          },
        },
      ],
    }
  );
  const onCompletedDelete = (data: delete_zzim_mutation) => {
    const {
      deleteZzim: { ok, error },
    } = data;
    if (ok) {
      setHeart(false);
    }
  };

  const [delete_zzim_mutation] = useMutation<
    delete_zzim_mutation,
    delete_zzim_mutationVariables
  >(DELETE_ZZIM_MUTATION, {
    onCompleted: onCompletedDelete,
    refetchQueries: [
      {
        query: ROOM_QUERY,
        variables: {
          roomDetailInput: {
            roomId: id,
            userId: userId,
          },
        },
      },
    ],
  });

  //data 변경시 room setter
  useEffect(() => {
    console.log(data);
    if (!loading && !error) {
      setRoom(data?.roomDetail.room);
      if (data?.roomDetail.like) {
        setHeart(data.roomDetail.like);
      }
    }
  }, [data]);

  const handleLikeHeart = () => {
    if (!isLoggedIn) return alert("로그인 후 이용해주세요.");
    if (data?.roomDetail.room && !loading) {
      zzim_mutation({
        variables: {
          createZzimInput: {
            roomId: data?.roomDetail.room?.id,
          },
        },
      });
    }
  };
  const handleUnLikeHeart = () => {
    if (data?.roomDetail.room && !loading) {
      delete_zzim_mutation({
        variables: {
          createZzimInput: {
            roomId: data?.roomDetail.room?.id,
          },
        },
      });
    }
  };

  //단위 handler
  const handleUnit = () => {
    setUnit(!unit);
  };

  const handleRoadview = () => {
    setRoadview(!roadview);
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <>
      {room !== null && (
        <article
          className={
            "w-full sm:w-340 md:w-400  flex flex-col h-full justify-start bg-white "
          }
        >
          <div className={"w-full"}>
            <ListHeader
              src={roadview ? xImg : arrowLeft}
              alt={"뒤로가기"}
              isDetail={true}
              label={roadview ? "위치보기" : room.address}
              handleUnit={handleUnit}
              isRoadview={roadview}
              onClick={roadview ? handleRoadview : goBack}
              handleHeart={handleLikeHeart}
              handleUnHeart={handleUnLikeHeart}
              isHeart={heart}
            />
          </div>
          {loading ? (
            <Loading />
          ) : (
            <div
              className={
                "flex flex-col flex-grow-0 h-620 overflow-y-auto overflow-x-hidden  bg-primary relative justify-center items-center"
              }
            >
              <div
                className={"absolute w-full h-full transform  translate-y-0"}
              >
                {roadview ? (
                  <div className={"w-full md:w-400 h-full"}>
                    <DetailRoadview
                      lat={room.point.coordinates[1]}
                      lon={room.point.coordinates[0]}
                    ></DetailRoadview>
                  </div>
                ) : (
                  <>
                    <DetailHeader
                      unitChange={unit}
                      dealType={room.dealType === "month" ? "월세" : "전세"}
                      deposit={room.deposit}
                      rent={room.rent}
                      images={room.images}
                      text={room.text}
                      structure={room.structure}
                      id={room.id}
                      exclusiveArea={room.exclusiveArea}
                      expense={room.expense}
                    />
                    <DetailInfo
                      isParking={room.isParking}
                      isElevator={room.isElevator}
                      posibleMove={room.posibleMove}
                      exclusiveArea={room.exclusiveArea}
                      expense={room.expense}
                      structure={room.structure}
                      completionDate={room.completionDate}
                      floor={room.floor}
                      buildingFloor={room.buildingFloor}
                      address={room.address}
                      unitChange={unit}
                    />
                    <DetailOptions options={room.options} />
                    <DetailExpenses
                      expense={room.expense}
                      expenseOptions={room.expenseOptions}
                    />
                    <DetailText label={"상세 설명"} wysiwyg={room.wysiwyg} />
                    <DetailMap
                      address={room.address}
                      lat={room.point.coordinates[1]}
                      lon={room.point.coordinates[0]}
                      onRoadview={handleRoadview}
                    />
                    <DetailAgent
                      name={room.agency.name}
                      img={room.agency.agent}
                      phone={room.agency.phoneNum}
                    />
                    <DetailText
                      label={"중개사무소 인사말"}
                      wysiwyg={room.agency.name}
                    />
                  </>
                )}
              </div>
            </div>
          )}
        </article>
      )}
    </>
  );
};

export default withRouter(Detail);
