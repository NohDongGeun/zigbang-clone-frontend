import React, { useEffect, useReducer, useState } from "react";
import {
  CreateRoomTemplate,
  Loading,
  ChangeRoomBtn,
} from "../../../components";
import RoomPostcode from "../../../components/organisms/CreateRoom/RoomPostcode";
import { registerReducer, initialState } from "../CreateRoom/reducer";
import DaumPostcode from "react-daum-postcode";
import { useParams } from "react-router";
import { ApolloError, gql, useMutation, useQuery } from "@apollo/client";
import useCreateRoom from "../../../hooks/useCreateRoom";
import { DealType, RoomType } from "../../../__generated__/globalTypes";
import { createRoomValidate } from "../CreateRoom/validate";
import {
  delete_room_mutation,
  delete_room_mutationVariables,
} from "../../../__generated__/delete_room_mutation";
import {
  edit_room_mutation,
  edit_room_mutationVariables,
} from "../../../__generated__/edit_room_mutation";
import { S3_URL } from "../../../constants/constants";
import { FIND_ACTIVEROOMS_QUERY } from "../Home";
import {
  room_active_mutation,
  room_active_mutationVariables,
} from "../../../__generated__/room_active_mutation";
import { private_room_detail_query } from "../../../__generated__/private_room_detail_query";
import { useConfirm } from "../../../hooks/useConfirm";

export const PRIVATE_ROOM_DETAIL_QUERY = gql`
  query private_room_detail_query(
    $privateRoomDetailInput: PrivateRoomDetailInput!
  ) {
    privateRoomDetail(input: $privateRoomDetailInput) {
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
        isActive
      }
    }
  }
`;

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

export const ROOM_ACTIVE_MUTATION = gql`
  mutation room_active_mutation($changeActiveInput: ChangeActiveInput!) {
    changeActive(input: $changeActiveInput) {
      ok
      error
    }
  }
`;

export const DELETE_ROOM_MUTATION = gql`
  mutation delete_room_mutation($deleteRoomInput: DeleteRoomInput!) {
    deleteRoom(input: $deleteRoomInput) {
      ok
      error
    }
  }
`;

interface IRoomDetailParams {
  id: string;
}

const RoomDetail: React.FC = () => {
  const [state, dispatch] = useReducer(registerReducer, initialState);
  const { id } = useParams<IRoomDetailParams>();
  const [deleteLoading, setDeleteLoading] = useState<boolean>(false);
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

  const onCompletedAcive = (data: room_active_mutation) => {
    const {
      changeActive: { ok },
    } = data;

    if (ok) {
      history.push("/agency");
    }
  };

  const [room_active_mutation] = useMutation<
    room_active_mutation,
    room_active_mutationVariables
  >(ROOM_ACTIVE_MUTATION, {
    onCompleted: onCompletedAcive,
    refetchQueries: [{ query: FIND_ACTIVEROOMS_QUERY }],
  });

  const onCompletedDelete = (data: delete_room_mutation) => {
    const {
      deleteRoom: { ok, error },
    } = data;
    if (ok) {
      history.push("/agency");
    }
    if (error) {
      alert("삭제 중 오류가 발생했습니다.");
    }
  };

  const [delete_room_mutation] = useMutation<
    delete_room_mutation,
    delete_room_mutationVariables
  >(DELETE_ROOM_MUTATION, {
    onCompleted: onCompletedDelete,
    refetchQueries: [{ query: FIND_ACTIVEROOMS_QUERY }],
  });
  //방 업데이트 성공시
  const onCompletedEdit = (data: edit_room_mutation) => {
    const {
      editRoom: { ok, error },
    } = data;
    if (ok) {
      dispatch({ type: "SET_LOADING", isLoading: false });
      history.push("/agency");
    }
    if (error) {
      dispatch({ type: "SET_ERRORMESSAGE", message: error });
    }
  };
  //방 업데이트 mutation
  const [edit_room_mutation] = useMutation<
    edit_room_mutation,
    edit_room_mutationVariables
  >(EDIT_ROOM_MUTATION, {
    onCompleted: onCompletedEdit,
    refetchQueries: [
      { query: FIND_ACTIVEROOMS_QUERY },
      {
        query: PRIVATE_ROOM_DETAIL_QUERY,
        variables: {
          roomDetailInput: {
            roomId: +id,
          },
        },
      },
    ],
  });
  //방 정보 (private)
  const { data, loading, error } = useQuery<private_room_detail_query>(
    PRIVATE_ROOM_DETAIL_QUERY,
    {
      variables: {
        privateRoomDetailInput: {
          roomId: +id,
        },
      },
      fetchPolicy: "network-only",
    }
  );
  //방 정보 query
  const onCompleted = (data: private_room_detail_query) => {
    if (data?.privateRoomDetail.room) {
      const { room } = data.privateRoomDetail;
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
    }
  };
  // 방 정보 error
  const onError = (error: ApolloError) => {
    return <Loading />;
  };

  useEffect(() => {
    if (!loading && !error && data) {
      const {
        privateRoomDetail: { ok, error },
      } = data;
      if (ok) {
        onCompleted(data);
      }
      if (error) {
        history.push("agency");
      }
    } else if (!loading && error) {
      onError(error);
    }
  }, [loading, data, error]);

  //삭제된 이미지 찾기
  const findDeleteImages = () => {
    const allPrevUrl = state.prevUrl.filter((v) => v.match(S3_URL));

    if (data?.privateRoomDetail.room?.images) {
      let deletePrevUrl = [];
      deletePrevUrl = data.privateRoomDetail.room.images.filter(
        (v) => !allPrevUrl.includes(v)
      );
      return deletePrevUrl;
    }
  };
  //방 업데이트 submit
  const handleUpdateRoom = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    try {
      e.preventDefault();

      const deleteImages = findDeleteImages();

      const validation = createRoomValidate(
        state.room,
        state.errors,
        state.prevUrl
      );
      if (validation?.error === true || validation?.message !== "") {
        return dispatch({
          type: "SET_ERRORMESSAGE",
          message: validation.message,
        });
      }
      dispatch({ type: "SET_ERRORMESSAGE", message: "" });
      dispatch({ type: "SET_LOADING", isLoading: true });

      const formBody = new FormData();
      if (data?.privateRoomDetail.room?.s3Code) {
        formBody.append("id", data?.privateRoomDetail.room.s3Code);
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

      const expenses = state.room.expenses?.map((e) => +e);
      const options = state.room.options?.map((e) => +e);

      if (data?.privateRoomDetail.room?.id) {
        edit_room_mutation({
          variables: {
            editRoomInput: {
              roomId: data?.privateRoomDetail.room?.id,
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
              s3Code: data.privateRoomDetail.room.s3Code,
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
  };
  //방 삭제 submit
  const handleDeleteRoom = async () => {
    try {
      if (deleteLoading) return;
      const { ok } = await (
        await fetch(
          `http://localhost:4000/uploads/delete/${data?.privateRoomDetail.room?.s3Code}`,
          {
            method: "DELETE",
          }
        )
      ).json();

      if (ok && data?.privateRoomDetail.room) {
        delete_room_mutation({
          variables: {
            deleteRoomInput: {
              roomId: data?.privateRoomDetail.room.id,
            },
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  //광고 on/off
  const handleActiveRoom = () => {
    if (data?.privateRoomDetail.room) {
      room_active_mutation({
        variables: {
          changeActiveInput: {
            roomId: data?.privateRoomDetail.room.id,
            active: !data.privateRoomDetail.room.isActive,
          },
        },
      });
    }
  };
  //window confirm on
  const confirmDelete = useConfirm("삭제하시겠습니까?", handleDeleteRoom);

  if (loading) return <Loading />;

  return (
    <>
      <CreateRoomTemplate
        onSubmit={handleUpdateRoom}
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
        contentError={state.errors.contentError}
        titleError={state.errors.titleError}
        possibleMoveError={state.errors.possibleMoveError}
      >
        <ChangeRoomBtn
          onClickDelete={confirmDelete}
          onClickActive={handleActiveRoom}
          isActive={
            data?.privateRoomDetail.room?.isActive
              ? data?.privateRoomDetail.room?.isActive
              : false
          }
        />
      </CreateRoomTemplate>
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
