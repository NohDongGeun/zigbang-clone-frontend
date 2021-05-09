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
import { ApolloError, gql, useMutation, useQuery } from "@apollo/client";
import { room_detail_guery } from "../../../__generated__/room_detail_guery";
import useCreateRoom from "../../../hooks/useCreateRoom";
import { DealType, RoomType } from "../../../__generated__/globalTypes";
import { createRoomValidate } from "../CreateRoom/validate";
import { version } from "react-dom";

export const EDIT_ROOM_MUTATION = gql`
  mutation edit_room_mutation(
    $optionsExpensesInput: OptionsExpensesInput!
    $editRoomInput: EditRoomInput!
    $createLocationInput: CreateLocationInput!
  ) {
    editRoom(
      input2: $optionsExpensesInput
      input: $editRoomInput
      inputLocation: $createLocationInput
    ) {
      ok
      error
    }
  }
`;

export const ROOM_DETAIL_QUERY = gql`
  query room_detail_guery($roomDetailInput: RoomDetailInput!) {
    roomDetail(input: $roomDetailInput) {
      ok
      error
      room {
        id
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
        s3Code
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
  const [edit_room_mutation] = useMutation(EDIT_ROOM_MUTATION, {
    onCompleted: (data) => {
      if (data.error) {
        console.log(data.error);
      }
      if (data.ok) {
        console.log(data.ok);
      }
    },
  });
  const { data, loading, error } = useQuery<room_detail_guery>(
    ROOM_DETAIL_QUERY,
    {
      variables: {
        roomDetailInput: {
          roomId: +id,
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
    console.log(data);
  }, [data]);

  useEffect(() => {
    if (!loading && !error && data) {
      console.log("성공");
      onCompleted(data);
    } else if (!loading && error) {
      onError(error);
    }
  }, [loading, data, error]);

  const translate = () => {
    const test1 = state.prevUrl.filter((v) =>
      v.match("https://zigbangclones3.s3.amazonaws.com/items/")
    );

    if (data?.roomDetail.room?.images) {
      let test2 = [];
      test2 = data.roomDetail.room.images.filter((v) => !test1.includes(v));
      return test2;
    }
  };

  const onSubmit = useCallback(
    async (e) => {
      try {
        e.preventDefault();
        const deleteImages = translate();

        // const test = createRoomValidate(
        //   state.room,
        //   state.errors,
        //   state.prevUrl
        // );
        // if (test?.error === true || test?.message !== "") {
        //   return dispatch({ type: "SET_ERRORMESSAGE", message: test.message });
        // }
        // dispatch({ type: "SET_ERRORMESSAGE", message: "" });
        // dispatch({ type: "SET_LOADING", isLoading: true });

        const formBody = new FormData();
        if (data?.roomDetail.room?.s3Code) {
          formBody.append("id", data?.roomDetail.room.s3Code);
          state.room.images.map((e, i) => {
            return formBody.append("files", state.room.images[i]);
          });
        }
        if (deleteImages) {
          formBody.append("deleteImages", JSON.stringify(deleteImages));
        }
        //이미지 s3에 업로드 후 url 받아오기
        const { imagesPath: coverImg } = await (
          await fetch("http://localhost:4000/uploads/updates", {
            method: "PUT",
            body: formBody,
          })
        ).json();
        console.log(coverImg);
        const expenses = state.room.expenses?.map((e) => +e);
        const options = state.room.options?.map((e) => +e);

        if (data?.roomDetail.room?.id) {
          console.log(+state.room.location[1], +state.room.location[0]);
          edit_room_mutation({
            variables: {
              editRoomInput: {
                roomId: data?.roomDetail.room?.id,
                isParking: state.room.isParking === "true",
                rent: +state.room.rent,
                deposit: +state.room.deposit,
                posibleMove: state.room.possibleMove,
                supplyArea: +state.room.supplyArea,
                exclusiveArea: +state.room.exclusiveArea,
                floor: +state.room.floor,
                buildingFloor: +state.room.buildingFloor,
                address: state.room.address,
                title: state.room.title,
                content: state.room.content,
                images: coverImg,
                expense: +state.room.expense,
                roomType: state.room.roomType as RoomType,
                dealType: state.room.dealType as DealType,
                s3Code: data.roomDetail.room.s3Code,
                deleteImages,
              },
              createLocationInput: {
                lat: +state.room.location[1],
                lon: +state.room.location[0],
              },
              optionsExpensesInput: {
                expensesIds: expenses,
                optionsIds: options,
              },
            },
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
    [state]
  );

  if (loading) return <Loading />;

  return (
    <>
      <CreateRoomTemplate
        onSubmit={onSubmit}
        addImages={addImages}
        onShowPortal={onShowPortal}
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
        <RoomPostcode closeWindowPortal={onShowPortal}>
          <DaumPostcode
            style={{ width: "100%", height: "100%" }}
            onComplete={onCompletedPostcode}
          />
        </RoomPostcode>
      )}
    </>
  );
};

export default RoomDetail;
