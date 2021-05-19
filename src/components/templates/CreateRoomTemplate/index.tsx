import React from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
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

export interface ICreateRoomTemplate {
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
  expenses?: string[];
  options?: string[];
  possibleMove: string;
  address: string;
  location: number[];
  currentMoveNum: number;
  currentTitleNum: number;
  currentContentNum: number;
  prevUrl: string[];
  label: string;
  message?: string;
  title: string;
  content: string;
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
  rentError: boolean;
  depositError: boolean;
  floorError: boolean;
  buildingFloorError: boolean;
  exclusiveAreaError: boolean;
  supplyAreaError: boolean;
  expenseError: boolean;
  possibleMoveError: boolean;
  titleError: boolean;
  contentError: boolean;
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
  title,
  content,
  rentError,
  depositError,
  floorError,
  buildingFloorError,
  exclusiveAreaError,
  supplyAreaError,
  expenseError,
  possibleMoveError,
  titleError,
  contentError,
  children,
}) => {
  return (
    <div
      className={"w-full h-600 bg-white flex flex-col md:flex-row  sm:mt-80 "}
    >
      <div className={"flex flex-col p-2  bg-white m-auto"}>
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
          rentError={rentError}
          depositError={depositError}
          floorError={floorError}
          buildingFloorError={buildingFloorError}
          exclusiveAreaError={exclusiveAreaError}
          supplyAreaError={supplyAreaError}
        />
        <RoomImgs addImages={addImages} prevUrl={prevUrl} onRemove={onRemove} />
        <RoomOptions
          onClick={onClick}
          expense={expense}
          expenses={expenses ? expenses : []}
          options={options ? options : []}
          possibleMove={possibleMove}
          currentMoveNum={currentMoveNum}
          onChange={onChange}
          onChangeTextarea={onChangeTextarea}
          isParking={isParking}
          expenseError={expenseError}
          possibleMoveError={possibleMoveError}
        />
        <RoomTexts
          currentTitleNum={currentTitleNum}
          currentContentNum={currentContentNum}
          onChangeTextarea={onChangeTextarea}
          contentError={contentError}
          titleError={titleError}
          title={title}
          content={content}
        />
        {message && <ErrorMessage message={message} />}
        <section
          className={
            "w-full flex flex-col  justify-center items-center relative px-3"
          }
        >
          <Button
            type={"submit"}
            onClick={onSubmit}
            className={
              "w-60 py-3 border border-blue-dark bg-blue-dark text-white font-bold"
            }
            label={label}
          />
          {children}
        </section>
      </div>
    </div>
  );
};

export default CreateRoomTemplate;
