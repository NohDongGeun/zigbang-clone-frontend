import React, { useEffect, useState } from "react";
import { RegisterBox, RegisterLabel, RoomImg } from "../../..";

interface IRoomImgs {
  onRemove: (i: number) => void;
  prevUrl: string[];
  addImages: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RoomImgs: React.FC<IRoomImgs> = ({ onRemove, prevUrl, addImages }) => {
  return (
      <RegisterBox label={"사진"}>
        <RegisterLabel label={"사진등록"}>
          <div className={"flex flex-col flex-1"}>
            <label
              htmlFor={"image_input"}
              className={
                "cursor-pointer border border-gray-300 h-42  w-136 sm:w-200 flex justify-center items-center mb-6"
              }
            >
              이미지 등록
            </label>
            <input
              type={"file"}
              accept={"image/jpg,image/png,image/jpeg,image/gif"}
              className={"hidden"}
              id={"image_input"}
              onChange={addImages}
              name={"images"}
              multiple
            ></input>
            <div className={"flex w-full flex-row flex-wrap"}>
              {prevUrl.map((e, i) => {
                return (
                  <RoomImg
                    src={e}
                    alt={"asd"}
                    onRemove={() => onRemove(i)}
                    key={i}
                  />
                );
              })}
            </div>
          </div>
        </RegisterLabel>
      </RegisterBox>
  );
};

export default RoomImgs;
