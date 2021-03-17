import React, { useState } from "react";
import {
  Button,
  FilterBox,
  FilterFixed,
  FilterHeader,
  FilterRange,
  Input,
  Text,
} from "../..";

const DEALTYPE = ["전체", "전세", "월세"];
const FLOORTYPE = ["전체", "지상층", "반지하/옥탑"];
const ROOMTYPE = ["원룸", "투룸", "쓰리룸", "포룸이상"];

const Filter: React.FC = ({}) => {
  const [alert, setAlert] = useState<boolean>(false);
  const [able, setAble] = useState<boolean>(false);
  const [dealType, setDealType] = useState<"전체" | "전세" | "월세">("전체");
  const [floorType, setFloorType] = useState<string>("전체");
  const [roomType, setRoomType] = useState<string>("전체");
  const [isParking, setIsParking] = useState<boolean>(false);
  const [deposit, setDeposit] = useState<string>("전체");
  const [rent, setRent] = useState<string>("전체");

  //filter on/off
  const handleFilter = () => {
    setAble(!able);
  };
  //dealtype alert on/off
  const handleAlert = () => {
    setAlert(!alert);
  };

  //filter value setter
  const onClickFilter = () => {};

  //isParking setter
  const onChangeParking = () => {
    setIsParking(!isParking);
  };
  //handle range
  const onChangeValue = (value: number[]) => {
    console.log(value);
  };

  //filter reset
  const reset = () => {};

  return (
    <article
      className={`w-full sm:w-400 ${
        able && "h-400"
      }  sm:w-400 sm:absolute sm:transform sm:translate-y-5 sm:translate-x-5 bg-gray-200 border border-gray-300 shadow-md`}
    >
      <FilterFixed
        label={rent ? `${deposit} · ${rent}` : `${deposit}`}
        handleFilter={handleFilter}
        handleAlert={handleAlert}
        value={dealType}
      />
      {able && (
        <>
          <FilterHeader onClick={reset} />
          <div className={" w-full absolute overflow-y-auto h-094 sm:h-111"}>
            <FilterBox className={"mb-3"} label={"거래 유형"} value={dealType}>
              <div className={"flex flex-1 flex-row -ml-2 py-3"}>
                {DEALTYPE.map((e, i) => {
                  return (
                    <Button
                      className={
                        "border border-gray-300 flex-auto ml-2 py-2 rounded-md focus:border-gray-900 focus:font-extrabold focus:text-white focus:bg-gray-900"
                      }
                      label={e}
                      key={i}
                      onClick={onClickFilter}
                    />
                  );
                })}
              </div>
            </FilterBox>
            <FilterBox className={"mb-3"} label={"전세"} value={deposit}>
              <FilterRange
                onChange={onChangeValue}
                labels={["최소", "5천만", "2.5억", "최대"]}
              />
            </FilterBox>
            <FilterBox className={"mb-3"} label={"월세"} value={rent}>
              <FilterRange
                onChange={onChangeValue}
                labels={["최소", "35만", "150만", "최대"]}
              />
            </FilterBox>
            <FilterBox className={"mb-3"} label={"구조"} value={roomType}>
              <div className={"flex flex-auto flex-row flex-wrap py-3"}>
                {ROOMTYPE.map((e, i) => {
                  return (
                    <Button
                      className={` w-1/2 py-2  border-gray-300 focus:border-gray-900 focus:font-extrabold focus:text-white focus:bg-gray-900`}
                      label={e}
                      key={i}
                      onClick={onClickFilter}
                    />
                  );
                })}
              </div>
            </FilterBox>
            <FilterBox
              className={"mb-3"}
              label={"층 수 옵션"}
              value={floorType}
            >
              <div className={"flex flex-1 flex-row -ml-2 py-3"}>
                {FLOORTYPE.map((e, i) => {
                  return (
                    <Button
                      className={
                        "border border-gray-300 flex-1 ml-2 py-2 rounded-md focus:border-gray-900 focus:font-extrabold focus:text-white focus:bg-gray-900"
                      }
                      label={e}
                      key={i}
                      onClick={onClickFilter}
                    />
                  );
                })}
              </div>
            </FilterBox>
            <FilterBox label={"주차 옵션"}>
              <div className={"flex justify-start items-center flex-1 py-2"}>
                <Input
                  type={"checkbox"}
                  onChange={onChangeParking}
                  checked={isParking}
                  className={"w-5 h-5 mr-2"}
                />
                <Text
                  label={"주차 가능만 보기"}
                  className={"text-base font-medium"}
                />
              </div>
            </FilterBox>
          </div>
        </>
      )}
    </article>
  );
};

export default Filter;
