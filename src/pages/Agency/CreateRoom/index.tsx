import React, { useCallback, useEffect, useReducer, useState } from "react";
import { CreateRoomTemplate } from "../../../components";
import { initialState, registerReducer } from "./reducer";

const CreateRoom: React.FC = () => {
  const [state, dispatch] = useReducer(registerReducer, initialState);
  const [currentPM, setCurrentPM] = useState<number>(0);
  const [currentTitle, setCurrentTitle] = useState<number>(0);
  const [currentContent, setCurrentContent] = useState<number>(0);

  useEffect(() => {}, [state]);

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

  return (
    <CreateRoomTemplate
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
    />
  );
};

export default CreateRoom;
