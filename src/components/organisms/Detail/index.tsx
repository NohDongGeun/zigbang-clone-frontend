import { gql, useMutation, useQuery, useReactiveVar } from "@apollo/client";
import React, { useEffect, useState } from "react";
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
  Button,
  NoDetail,
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
import { FIND_ZZIM_QUERY } from "../../../pages/User/Zzim";
import {
  delete_zzim_mutation,
  delete_zzim_mutationVariables,
} from "../../../__generated__/delete_zzim_mutation";
import {
  send_sms_mutationVariables,
  send_sms_mutation,
} from "../../../__generated__/send_sms_mutation";

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

export const ROOM_QUERY = gql`
  query roomDetail($roomDetailInput: RoomDetailInput!) {
    roomDetail(input: $roomDetailInput) {
      ok
      error
      like
      room {
        roomType
        id
        isParking
        point {
          coordinates
        }
        posibleMove
        exclusiveArea
        expense
        floor
        buildingFloor
        address
        secretAddress
        title
        dealType
        rent
        deposit
        content
        images
        agency {
          id
          name
          agent
          image
          phoneNum
        }
        expenses {
          name
          img
        }
        options {
          name
          img
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

export const SEND_SMS_MUTATION = gql`
  mutation send_sms_mutation($sendSmsInput: SendSmsInput!) {
    sendSmsAgency(input: $sendSmsInput) {
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
  const [errorView, setErrorView] = useState<boolean>(false);

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
      return <NoDetail />;
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
        { query: FIND_ZZIM_QUERY },
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
      { query: FIND_ZZIM_QUERY },
    ],
  });

  const onCompletedSms = (data: send_sms_mutation) => {
    const {
      sendSmsAgency: { ok, error },
    } = data;

    if (ok) {
      alert("중개사에게 메세지를 보냈습니다.");
    }
    if (error) {
      alert(error);
    }
  };

  const [send_sms_mutation] = useMutation<
    send_sms_mutation,
    send_sms_mutationVariables
  >(SEND_SMS_MUTATION, { onCompleted: onCompletedSms });

  const handleSms = () => {
    if (!isLoggedIn) return alert("로그인 후 이용해주세요.");
    if (data?.roomDetail.room?.id) {
      send_sms_mutation({
        variables: {
          sendSmsInput: {
            roomId: data.roomDetail.room.id,
            agencyId: data.roomDetail.room.agency.id,
          },
        },
      });
    }
  };

  //data 변경시 room setter
  useEffect(() => {
    if (!loading && !error && data) {
      const {
        roomDetail: { ok, error, room },
      } = data;
      if (ok) {
        setRoom(room);
        setErrorView(false);
      }
      if (error) {
        setErrorView(true);
      }
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
  if (errorView) {
    return <NoDetail />;
  }

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
              label={roadview ? "위치보기" : room.secretAddress}
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
                      text={room.title}
                      structure={room.roomType}
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
                      structure={room.roomType}
                      completionDate={room.completionDate}
                      floor={room.floor}
                      buildingFloor={room.buildingFloor}
                      address={room.secretAddress}
                      unitChange={unit}
                    />
                    <DetailOptions options={room.options} />
                    <DetailExpenses
                      expense={room.expense}
                      expenseOptions={room.expenses}
                    />
                    <DetailText label={"상세 설명"} wysiwyg={room.content} />
                    <DetailMap
                      address={room.secretAddress}
                      lat={room.point.coordinates[1]}
                      lon={room.point.coordinates[0]}
                      onRoadview={handleRoadview}
                    />
                    <DetailAgent
                      name={room.agency.name}
                      img={room.agency.image}
                      phone={room.agency.phoneNum}
                    />
                  </>
                )}
              </div>
            </div>
          )}
          <Button
            onClick={handleSms}
            className={
              "border border-gray-300 text-lg py-4 bg-blue-dark text-white font-bold"
            }
            label={"문의하기"}
          />
        </article>
      )}
    </>
  );
};

export default withRouter(Detail);
