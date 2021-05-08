import React, { useCallback, useEffect, useReducer, useRef } from "react";
import {
  Button,
  CreateRoomTemplate,
  Loading,
  RoomImgs,
  RoomLocation,
} from "../../../components";
import RoomPostcode from "../../../components/organisms/CreateRoom/RoomPostcode";
import { registerReducer, initialState, Room } from "../CreateRoom/reducer";
import DaumPostcode, { AddressData } from "react-daum-postcode";
import { useParams } from "react-router";
import { ApolloError, gql, useQuery } from "@apollo/client";
import { room_detail_guery } from "../../../__generated__/room_detail_guery";
import useCreateRoom from "../../../hooks/useCreateRoom";

export const ROOM_DETAIL_QUERY = gql`
  query room_detail_guery($roomDetailInput: RoomDetailInput!) {
    roomDetail(input: $roomDetailInput) {
      ok
      error
      room {
        roomType
        dealType
        floor
        buildingFloor
        options {
          id
        }
        expense
        expenses {
          id
        }
        deposit
        rent
        isParking
        posibleMove
        exclusiveArea
        supplyArea
        content
        title
        address
        point {
          coordinates
        }
        images
      }
    }
  }
`;

interface IinitailRoom {
  room: Room;
  prevUrl: string | string[];
}

interface IRoomDetailParams {
  id: string;
}

const RoomDetail: React.FC = () => {
  const [state, dispatch] = useReducer(registerReducer, initialState);
  const initailRoom = useRef<IinitailRoom>();
  const { id } = useParams<IRoomDetailParams>();
  const { data, loading, error } = useQuery<room_detail_guery>(
    ROOM_DETAIL_QUERY,
    {
      variables: {
        roomDetailInput: {
          roomId: +id,
          userId: 100,
        },
      },
    }
  );
  const {
    onShowPortal,
    onCompletedPostcode,
    onClick,
    onChange,
    addImages,
    onRemove,
    currentPM,
    currentTitle,
    currentContent,
    history,
  } = useCreateRoom({ state, dispatch });
  const onCompleted = (data: room_detail_guery) => {
    if (data?.roomDetail.room) {
      const { room } = data.roomDetail;
      const expenses = room.expenses?.map((e) => e.id.toString());
      const options = room.options?.map((e) => e.id.toString());
      const roomInit = {
        address: room.address,
        dealType: room.dealType,
        roomType: room.roomType,
        deposit: room.deposit.toString(),
        rent: room.rent.toString(),
        floor: room.floor.toString(),
        buildingFloor: room.buildingFloor.toString(),
        isParking: room.isParking.toString(),
        expense: room.expense.toString(),
        expenses: expenses,
        options: options,
        possibleMove: room.posibleMove,
        exclusiveArea: room.exclusiveArea.toString(),
        supplyArea: room.supplyArea.toString(),
        content: room.content,
        title: room.title,
        location: room.point.coordinates,
        images: [],
      };
      const prevUrl = room.images;

      dispatch({
        type: "SET_INITIAL",
        room: roomInit,
        prevUrl,
      });
      initailRoom.current = {
        room: { ...roomInit, options, expenses },
        prevUrl,
      };
    }
  };
  const onError = (error: ApolloError) => {
    return <div>{error}</div>;
  };

  useEffect(() => {
    if (!loading && !error && data) {
      onCompleted(data);
    } else if (!loading && error) {
      onError(error);
    }
  }, [loading, data, error]);

  // const checkFile = (file: File) => {
  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //     if (reader.result) {
  //       dispatch({
  //         type: "SET_PREVURL",
  //         prevUrl: reader.result.toString(),
  //       });
  //     }
  //   };
  //   reader.readAsDataURL(file);
  // };
  //등록한 이미지 미리보기
  // const addImages = async (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const {
  //     target: { files },
  //   } = e;
  //   if (files) {
  //     dispatch({ type: "SET_IMAGES", images: [...Array.from(files)] });
  //     Array.from(files).map(async (e, i) => {
  //       checkFile(files[i]);
  //     });
  //   }
  // };
  // const onRemove = (i: number) => {
  //   dispatch({ type: "REMOVE_IMAGES", i });
  // };

  const translate = () => {
    const test1 = state.prevUrl.filter((v) =>
      v.match("https://zigbangclones3.s3.amazonaws.com/items/")
    );
    console.log(test1);
    if (data?.roomDetail.room?.images) {
      let test2 = [];
      test2 = data.roomDetail.room.images.filter((v) => !test1.includes(v));
      console.log(test2);
    }
  };

  //translate는 삭제한 이미지가 있을때
  //이미지가 그대로일때 는 state.room.images가 비어있을때
  //이미지 추가 했을때는 서버에서 url이 있는지 없는지 검사후 없으면 삽입만
  //1,2,3
  //1,2,3
  // const onChange = (
  //   e:
  //     | React.ChangeEvent<HTMLInputElement>
  //     | React.ChangeEvent<HTMLTextAreaElement>
  // ) => {
  //   const {
  //     target: { value, name },
  //   } = e;
  //   dispatch({
  //     type: "CHANGE_INPUT",
  //     name,
  //     value,
  //     isError: true,
  //     errorName: `${name}Error`,
  //   });
  // };
  // const onClick = useCallback(
  //   (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //     const { name, value } = e.target as HTMLButtonElement;
  //     switch (name) {
  //       case "dealType": {
  //         dispatch({ type: "SET_DEALTYPE", dealType: value });
  //         break;
  //       }
  //       case "roomType": {
  //         dispatch({ type: "SET_ROOMTYPE", roomType: value });
  //         break;
  //       }
  //       case "isParking": {
  //         dispatch({ type: "SET_ISPARKING", isParking: value });
  //         break;
  //       }
  //       case "expenses": {
  //         dispatch({ type: "SET_EXPENSES", expenses: value });
  //         break;
  //       }
  //       case "options": {
  //         dispatch({ type: "SET_OPTIONS", options: value });
  //         break;
  //       }
  //     }
  //   },
  //   []
  // );
  if (loading) return <Loading />;

  return (
    <>
      <CreateRoomTemplate
        onSubmit={console.log}
        addImages={addImages}
        onShowPortal={console.log}
        onClick={onClick}
        onChange={onChange}
        onChangeTextarea={onChange}
        dealType={state.room.dealType}
        roomType={state.room.roomType}
        deposit={state.room.deposit}
        rent={state.room.rent}
        isParking={state.room.isParking}
        floor={state.room.floor}
        buildingFloor={state.room.buildingFloor}
        exclusiveArea={state.room.exclusiveArea}
        supplyArea={state.room.supplyArea}
        currentMoveNum={12}
        currentTitleNum={12}
        currentContentNum={12}
        expense={state.room.expense}
        expenses={state.room.expenses}
        options={state.room.options}
        possibleMove={state.room.possibleMove}
        address={state.room.address}
        location={state.room.location}
        prevUrl={state.prevUrl}
        onRemove={onRemove}
        title={state.room.title}
        content={state.room.content}
        message={state.ErrorMessage}
        label={state.isLoading ? "Loading..." : "완료"}
        rentError={state.errors.rentError}
        depositError={state.errors.depositError}
        floorError={state.errors.floorError}
        buildingFloorError={state.errors.buildingFloorError}
        exclusiveAreaError={state.errors.exclusiveAreaError}
        supplyAreaError={state.errors.supplyAreaError}
        expenseError={state.errors.expenseError}
      />
      {state.showPortal && (
        <RoomPostcode closeWindowPortal={console.log}>
          <DaumPostcode
            style={{ width: "100%", height: "100%" }}
            onComplete={console.log}
          />
        </RoomPostcode>
      )}
    </>
  );
};

export default RoomDetail;
