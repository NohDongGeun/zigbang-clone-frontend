import React, { useEffect, useState } from "react";
import { RegisterBox, RegisterLabel, RoomImg } from "../../..";

interface IRoomImgs {
  onRemove: (i: number) => void;
  prevUrl: string[];
  addImages: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RoomImgs: React.FC<IRoomImgs> = ({
  onRemove,
  prevUrl,
  addImages,
}) => {
  // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   const {
  //     target: { files },
  //   } = e;
  //   if (files) {
  //     console.log(files[0]);
  //     const reader = new FileReader();
  //     const file = files[0];
  //     reader.onloadend = () => {
  //       setImgs((imgs) => imgs.concat(file));
  //       setPrevURL((prev) => [...prev, reader.result]);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  // const removeImg = (e: string, name: string) => {
  //   setImgs((imgs) => imgs.filter((v) => v.name !== name));
  //   setPrevURL((prev) => prev.filter((v) => v !== e));
  //   console.log(imgs);
  // };

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
