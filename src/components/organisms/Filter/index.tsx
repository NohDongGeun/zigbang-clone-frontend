import React, { useCallback, useEffect, useReducer, useState } from "react";
import { DealType, RoomType, FloorType } from "../../../interfaces/Option";
import {
  Button,
  FilterAlert,
  FilterBox,
  FilterFixed,
  FilterHeader,
  FilterRange,
  Input,
  Text,
} from "../..";
import { filterReducer, initialState } from "./reducer";
import { ROOMTYPE, DEALTYPE, FLOORTYPE } from "../../../constants/filter";
import { filterVar, isFilterVar } from "../../../apollo";
import { handleDeposit, handleRent } from "./range";
import { prettyString } from "../../../utils/prettyString";
import { useReactiveVar } from "@apollo/client";

const Filter: React.FC = () => {
  //alert on/off 할때
  const [alert, setAlert] = useState<boolean>(false);
  //filter on/off 할때
  const [able, setAble] = useState<boolean>(false);
  //filter state
  const [state, dispatch] = useReducer(filterReducer, initialState);
  const isFilter = useReactiveVar(isFilterVar);

  //filter state가 변경될때마다 cache에 저장
  useEffect(() => {
    filterVar(state);
  }, [state]);

  //filter on/off
  const handleFilter = () => {
    setAble(!able);
    isFilterVar(false);
  };

  //dealtype alert on/off
  const handleAlert = () => {
    setAlert(!alert);
  };

  //filter button handler
  const onClickFilterButton = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const { name, value } = e.target as HTMLButtonElement;

    switch (name) {
      case "dealType": {
        dispatch({ type: "SET_DEALTYPE", dealType: value as DealType });
        break;
      }
      case "roomType": {
        dispatch({ type: "SET_ROOMTYPE", roomType: value as RoomType });
        break;
      }
      case "floorType": {
        dispatch({ type: "SET_FLOORTYPE", floorType: value as FloorType });
        break;
      }
      default:
        break;
    }
  };

  //isParking handler
  const onChangeParking = () => dispatch({ type: "SET_ISPARKING" });

  //deposit range handler
  const onChangeDeposit = (value: number[]) => {
    let depositValue: number[] = [];
    value.map((e) => {
      return depositValue.push(handleDeposit(e));
    });
    return dispatch({ type: "SET_DEPOSIT", deposit: depositValue });
  };

  //rent range handler
  function onChangeRent(value: number[]) {
    let rentValue: number[] = [];
    value.map((e) => {
      return rentValue.push(handleRent(e));
    });
    return dispatch({ type: "SET_RENT", rent: rentValue });
  }

  //filter reset
  const reset = () => dispatch({ type: "RESET" });

  return (
    <article
      className={` ${
        isFilter
          ? "h-366 sm:h-full md:h-455 fixed w-full  md:w-80 sm:absolute  sm:transform sm:right-0 sm:top-0 bg-primary border border-gray-300 shadow-md z-10"
          : " hidden"
      }  `}
    >
      <FilterHeader onClick={handleFilter} reset={reset} />
      <div className={"w-full absolute overflow-y-auto h-630 md:h-620 z-10"}>
        <FilterBox
          className={"mb-3"}
          label={"거래 유형"}
          value={state.dealType}
        >
          <div className={"flex flex-1 flex-row -ml-2 py-3"}>
            {DEALTYPE.map((e, i) => {
              return (
                <Button
                  className={`${
                    e === state.dealType &&
                    "bg-blue-dark  font-extrabold text-white"
                  } border border-gray-300 flex-auto ml-2 py-2 rounded-md `}
                  label={e}
                  key={i}
                  name={"dealType"}
                  value={e}
                  onClick={onClickFilterButton}
                />
              );
            })}
          </div>
        </FilterBox>
        <FilterBox
          className={"mb-3"}
          label={"전세"}
          value={prettyString(state.deposit, 100000)}
        >
          <FilterRange
            onChange={onChangeDeposit}
            labels={["최소", "5천만", "2.5억", "최대"]}
          />
        </FilterBox>
        <FilterBox
          className={"mb-3"}
          label={"월세"}
          value={prettyString(state.rent, 500)}
        >
          <FilterRange
            onChange={onChangeRent}
            labels={["최소", "35만", "150만", "최대"]}
          />
        </FilterBox>
        <FilterBox className={"mb-3"} label={"구조"} value={state.roomType}>
          <div className={"flex flex-auto flex-row flex-wrap py-3"}>
            {ROOMTYPE.map((e, i) => {
              return (
                <Button
                  className={` ${
                    e === state.roomType &&
                    "bg-blue-dark  font-extrabold text-white"
                  } w-1/2 py-2  border-gray-300 `}
                  label={e}
                  key={i}
                  name={"roomType"}
                  value={e}
                  onClick={onClickFilterButton}
                />
              );
            })}
          </div>
        </FilterBox>
        <FilterBox
          className={"mb-3"}
          label={"층 수 옵션"}
          value={state.floorType}
        >
          <div className={"flex flex-1 flex-row -ml-2 py-3"}>
            {FLOORTYPE.map((e, i) => {
              return (
                <Button
                  className={` ${
                    e === state.floorType &&
                    "bg-blue-dark  font-extrabold text-white"
                  } border border-gray-300 flex-1 ml-2 py-2 rounded-md `}
                  label={e}
                  key={i}
                  name={"floorType"}
                  value={e}
                  onClick={onClickFilterButton}
                />
              );
            })}
          </div>
        </FilterBox>
        <FilterBox className={""} label={"주차 옵션"}>
          <div className={"flex justify-start items-center flex-1 py-2"}>
            <Input
              type={"checkbox"}
              onChange={onChangeParking}
              checked={state.isParking}
              className={"w-5 h-5 mr-2"}
            />
            <Text
              label={"주차 가능만 보기"}
              className={"text-base font-medium"}
            />
          </div>
        </FilterBox>
      </div>
    </article>
  );
};

export default Filter;
