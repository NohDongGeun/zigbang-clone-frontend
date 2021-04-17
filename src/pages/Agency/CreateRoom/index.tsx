import React, { useCallback, useEffect, useReducer, useState } from "react";
import DaumPostcode, { AddressData } from "react-daum-postcode";
import { CreateRoomTemplate } from "../../../components";
import RoomPostcode from "../../../components/organisms/CreateRoom/RoomPostcode";
import { initialState, registerReducer } from "./reducer";

declare global {
  interface Window {
    kakao: any;
  }
}

const CreateRoom: React.FC = () => {
  const [state, dispatch] = useReducer(registerReducer, initialState);
  //textarea 글자수
  const [currentPM, setCurrentPM] = useState<number>(0);
  const [currentTitle, setCurrentTitle] = useState<number>(0);
  const [currentContent, setCurrentContent] = useState<number>(0);

  //portal 창 닫을 시 showportal false
  const closeWindowPortal = () => {
    dispatch({ type: "SET_PORTAL", portal: false });
  };
  //postcode on/off
  const onShowPortal = () => {
    dispatch({ type: "SET_PORTAL", portal: !state.showPortal });
  };
  //postcode 주소 선택시
  const onCompletedPostcode = (data: AddressData) => {
    //카카오 주소 ->좌표 서비스
    const geocoder = new window.kakao.maps.services.Geocoder();
    geocoder.addressSearch(data.address, function (result: any, status: any) {
      //주소로 좌표변환 성공시
      if (status === window.kakao.maps.services.Status.OK) {
        dispatch({
          type: "SET_LOCATION",
          location: [+result[0].x, +result[0].y],
          address: data.address,
        });
      }
    });
  };

  //주소검색 portal 업데이트
  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      closeWindowPortal();
    });
    return () => {
      window.removeEventListener("beforeunload", () => {
        closeWindowPortal();
      });
    };
  }, []);

  //textarea 글자수 업데이트
  useEffect(() => {
    setCurrentPM(state.room.possibleMove.length);
  }, [state.room.possibleMove]);
  useEffect(() => {
    setCurrentTitle(state.room.title.length);
  }, [state.room.title]);
  useEffect(() => {
    setCurrentContent(state.room.content.length);
    console.log(state.room.content);
  }, [state.room.content]);

  //버튼 클릭 시 reducer 찾아서 업데이트
  const onClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const { name, value } = e.target as HTMLButtonElement;
      switch (name) {
        case "dealType": {
          dispatch({ type: "SET_DEALTYPE", dealType: value });
          break;
        }
        case "roomType": {
          dispatch({ type: "SET_ROOMTYPE", roomType: value });
          break;
        }
        case "isParking": {
          dispatch({ type: "SET_ISPARKING", isParking: value });
          break;
        }
        case "expenses": {
          dispatch({ type: "SET_EXPENSES", expenses: value });
          break;
        }
        case "options": {
          dispatch({ type: "SET_OPTIONS", options: value });
          break;
        }
      }
    },
    []
  );
  // input,textarea change handler
  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const {
      target: { value, name },
    } = e;
    dispatch({
      type: "CHANGE_INPUT",
      name,
      value,
    });
  };
  const checkFile = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.result) {
        dispatch({
          type: "SET_PREVURL",
          prevUrl: reader.result.toString(),
        });
      }
    };
    reader.readAsDataURL(file);
  };

  const addImages = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const {
      target: { files },
    } = e;
    if (files) {
      dispatch({ type: "SET_IMAGES", images: [...Array.from(files)] });
      Array.from(files).map(async (e, i) => {
        checkFile(files[i]);
      });
    }
  };

  //이미지 지우기
  const onRemove = (i: number) => {
    dispatch({ type: "REMOVE_IMAGES", i });
  };

  //Error handler
  const errorHandler = () => {
    if (
      state.room.images === [] ||
      state.room.address === "" ||
      state.room.deposit === "" ||
      state.room.floor === "" ||
      state.room.buildingFloor === "" ||
      state.room.isParking === "" ||
      state.room.possibleMove === "" ||
      state.room.content === "" ||
      state.room.title === "" ||
      currentPM > 20 ||
      currentTitle > 32 ||
      currentTitle < 6 ||
      currentContent > 50
    ) {
      return dispatch({
        type: "SET_ERROR",
        isError: true,
        message: "입력란을 다시 확인해주세요.",
      });
    }

    return dispatch({ type: "SET_ERROR", isError: false, message: "" });
  };

  //Submit handler
  const onSubmit = async () => {
    errorHandler();
    if (state.isError === false || state.isLoading === false) {
      return;
    }
    dispatch({ type: "SET_LOADING", isLoading: true });

    const formBody = new FormData();
    state.room.images.map((e, i) => {
     return formBody.append("files", state.room.images[i]);
    });
    const { imagesPath: coverImg } = await (
      await fetch("http://localhost:4000/uploads/", {
        method: "POST",
        body: formBody,
      })
    ).json();
  };
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
        message={state.ErrorMessage}
        label={state.isLoading ? "Loading..." : "완료"}
      />
      {state.showPortal && (
        <RoomPostcode closeWindowPortal={closeWindowPortal}>
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
