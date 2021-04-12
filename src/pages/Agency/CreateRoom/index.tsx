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
  //postcode portal
  const [showPortal, setShowPortal] = useState<boolean>(false);
  const [prevUrl, setPrevUrl] = useState<any[]>([]);

  useEffect(() => {
    console.log(state);
  }, [state]);
  //portal 창 닫을 시 showportal false
  const closeWindowPortal = () => {
    setShowPortal(false);
  };
  //postcode on/off
  const onShowPortal = () => {
    setShowPortal(!showPortal);
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
    setCurrentPM(state.possibleMove.length);
  }, [state.possibleMove]);
  useEffect(() => {
    setCurrentTitle(state.title.length);
  }, [state.title]);
  useEffect(() => {
    setCurrentContent(state.content.length);
    console.log(state.content);
  }, [state.content]);

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
  const addImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const {
      target: { files },
    } = e;
    if (files) {
      const reader = new FileReader();
      const file = files[0];
      reader.onloadend = () => {
        dispatch({ type: "SET_IMAGES", image: files[0] });
        setPrevUrl((prev) => [...prev, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  };
  const onRemove = (i: number) => {
    dispatch({ type: "REMOVE_IMAGES", i });
    setPrevUrl((prev) => prev.filter((e, index) => index !== i));
  };

  const onSubmit = useCallback(
    (e) => {
      console.log(state);
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
        dealType={state.dealType}
        roomType={state.roomType}
        deposit={state.deposit}
        rent={state.rent}
        isParking={state.isParking}
        floor={state.floor}
        buildingFloor={state.buildingFloor}
        exclusiveArea={state.exclusiveArea}
        supplyArea={state.supplyArea}
        currentMoveNum={currentPM}
        currentTitleNum={currentTitle}
        currentContentNum={currentContent}
        expense={state.expense}
        expenses={state.expenses}
        options={state.options}
        possibleMove={state.possibleMove}
        address={state.address}
        location={state.location}
        prevUrl={prevUrl}
        onRemove={onRemove}
        label={"완료"}
      />
      {showPortal && (
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
