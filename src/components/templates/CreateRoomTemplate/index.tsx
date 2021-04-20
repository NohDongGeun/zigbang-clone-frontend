import React from "react";
import {
  Button,
  Header,
  RoomImgs,
  RoomInfos,
  RoomLocation,
  RoomOptions,
  RoomTexts,
  ErrorMessage,
} from "../..";

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
  prevUrl: string[];
  label: string;
  message?: string;
  addImages: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemove: (i: number) => void;
  onShowPortal: () => void;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  onChangeTextarea: React.ChangeEventHandler<HTMLTextAreaElement>;
  onSubmit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const CreateRoomTemplate: React.FC<ICreateRoomTemplate> = ({
  deposit,
  rent,
  floor,
  label,
  buildingFloor,
  exclusiveArea,
  supplyArea,
  isParking,
  expense,
  addImages,
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
  prevUrl,
  onRemove,
  onSubmit,
  message,
}) => {
  return (
    <div className={"w-full flex flex-col"}>
      <div className={"w-full"}>
        <Header
          logged={true}
          name={"노동근"}
          showNav={false}
          handleSideNav={console.log}
          isAgent={false}
        />
      </div>
      <div className={"flex flex-col p-2 mt-64 md:mt-80"}>
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
        <RoomImgs addImages={addImages} prevUrl={prevUrl} onRemove={onRemove} />
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
        {message && <ErrorMessage message={message} />}
        <section className={"w-full flex justify-center items-center"}>
          <Button
            onClick={onSubmit}
            className={
              "w-full sm:w-60 py-3 border border-yellow-600 bg-yellow-500 text-white font-bold"
            }
            label={label}
          />
        </section>
      </div>
    </div>
  );
};

export default CreateRoomTemplate;
