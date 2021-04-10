import React, { ChangeEventHandler } from "react";
import { Header, RoomInfos, RoomLocation, RoomOptions, RoomTexts } from "../..";

interface ICreateRoomTemplate {
  dealType: string;
  roomType: string;
  deposit: string;
  rent: string;
  floor: string;
  buildingFloor: string;
  exclusiveArea: string;
  isParking: string;
  supplyArea: string;
  expense: string;
  expenses: string[];
  options: string[];
  possibleMove: string;
  address: string;
  location: number[];
  currentMoveNum: number;
  currentTitleNum: number;
  currentContentNum: number;
  onShowPortal: () => void;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  onChangeTextarea: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const CreateRoomTemplate: React.FC<ICreateRoomTemplate> = ({
  deposit,
  rent,
  floor,
  buildingFloor,
  exclusiveArea,
  supplyArea,
  isParking,
  expense,
  expenses,
  address,
  options,
  possibleMove,
  currentMoveNum,
  currentTitleNum,
  currentContentNum,
  onChange,
  onClick,
  dealType,
  roomType,
  location,
  onChangeTextarea,
  onShowPortal,
  
}) => {
  return (
    <div className={"h-screen w-screen flex flex-col "}>
      <div className={"w-full"}>
        <Header logged={true} name={"노동근"} />
      </div>
      <div className={"flex flex-col p-2 overflow-y-scroll"}>
        <RoomLocation
          onShowPortal={onShowPortal}
          location={location}
          address={address}
        />
        <RoomInfos
          onClick={onClick}
          deposit={deposit}
          rent={rent}
          floor={floor}
          buildingFloor={buildingFloor}
          exclusiveArea={exclusiveArea}
          supplyArea={supplyArea}
          onChange={onChange}
          dealType={dealType}
          roomType={roomType}
        />
        <RoomOptions
          onClick={onClick}
          expense={expense}
          expenses={expenses}
          options={options}
          possibleMove={possibleMove}
          currentMoveNum={currentMoveNum}
          onChange={onChange}
          onChangeTextarea={onChangeTextarea}
          isParking={isParking}
        />
        <RoomTexts
          currentTitleNum={currentTitleNum}
          currentContentNum={currentContentNum}
          onChangeTextarea={onChangeTextarea}
        />
      </div>
    </div>
  );
};

export default CreateRoomTemplate;
