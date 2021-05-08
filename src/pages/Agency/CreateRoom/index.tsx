import { gql, useMutation, useQuery } from "@apollo/client";
import React, { useCallback, useEffect, useReducer, useState } from "react";
import DaumPostcode, { AddressData } from "react-daum-postcode";
import { FormProvider, useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import { CreateRoomTemplate, Loading } from "../../../components";
import RoomPostcode from "../../../components/organisms/CreateRoom/RoomPostcode";
import { createRoomValidate, validateInput } from "./validate";
import {
  create_room_mutation,
  create_room_mutationVariables,
} from "../../../__generated__/create_room_mutation";
import { DealType, RoomType } from "../../../__generated__/globalTypes";
import { room_detail_guery } from "../../../__generated__/room_detail_guery";
import { initialState, registerReducer } from "./reducer";
import withRoomHoc from "../withRoom";
import useCreateRoom from "../../../hooks/useCreateRoom";

export const CREATE_ROOM_MUTATION = gql`
  mutation create_room_mutation(
    $inputLocation: CreateLocationInput!
    $inputOpEx: OptionsExpensesInput!
    $input: CreateRoomInput!
  ) {
    createRoom(
      inputLocation: $inputLocation
      inputOpEx: $inputOpEx
      input: $input
    ) {
      ok
      error
    }
  }
`;

declare global {
  interface Window {
    kakao: any;
  }
}

interface IRoomDetailParams {
  id?: string;
}

const CreateRoom: React.FC = () => {
  const [state, dispatch] = useReducer(registerReducer, initialState);
  // const history = useHistory();
  const [message, setMessage] = useState<string>("");
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

  const onCompleted = (data: create_room_mutation) => {
    const {
      createRoom: { ok, error },
    } = data;
    if (ok) {
      dispatch({ type: "SET_LOADING", isLoading: false });
      history.push("/agency");
    }
    if (error) {
      setMessage("잘못된 입력입니다.");
    }
  };
  const [create_room_mutation] = useMutation<
    create_room_mutation,
    create_room_mutationVariables
  >(CREATE_ROOM_MUTATION, { onCompleted });

  //Submit handler
  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const test = createRoomValidate(state.room, state.errors, state.prevUrl);
      if (test?.error === true || test?.message !== "") {
        return dispatch({ type: "SET_ERRORMESSAGE", message: test.message });
      }
      dispatch({ type: "SET_ERRORMESSAGE", message: "" });
      dispatch({ type: "SET_LOADING", isLoading: true });

      const formBody = new FormData();
      formBody.append("id", "1343");
      state.room.images.map((e, i) => {
        return formBody.append("files", state.room.images[i]);
      });
      //이미지 s3에 업로드 후 url 받아오기
      const { imagesPath: coverImg } = await (
        await fetch("http://localhost:4000/uploads/", {
          method: "POST",
          body: formBody,
        })
      ).json();
      const expenses = state.room.expenses?.map((e) => +e);
      const options = state.room.options?.map((e) => +e);

      create_room_mutation({
        variables: {
          input: {
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
            s3Code: 23123,
          },
          inputLocation: {
            lat: +state.room.location[1],
            lon: +state.room.location[0],
          },
          inputOpEx: {
            expensesIds: expenses,
            optionsIds: options,
          },
        },
      });
    },
    [state]
  );

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
        currentMoveNum={currentPM}
        currentTitleNum={currentTitle}
        currentContentNum={currentContent}
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

export default CreateRoom;
