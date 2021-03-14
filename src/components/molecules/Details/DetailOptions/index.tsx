import React from "react";
import DetailBar from "../DetailBar";
import { Text, BackgroundImg } from "../../..";
import { IDetailOption } from "../../../../interfaces/Option";

interface IDetailOptions {
  /**
   * room 옵션 배열
   */
  options?: IDetailOption[];
}

const DetailOptions: React.FC<IDetailOptions> = ({ options }) => {
  return (
    <DetailBar label={"옵션 정보"}>
      <div className={"flex flex-1 flex-row flex-wrap"}>
        {options ? (
          options.map((option, i) => {
            return (
              <BackgroundImg src={option.src} label={option.label} key={i} />
            );
          })
        ) : (
          <Text
            className={
              "w-full px-3 py-4 text-gray-400 justify-center items-center text-center"
            }
            label={"제공되는 옵션이 없습니다"}
          />
        )}
      </div>
    </DetailBar>
  );
};

export default DetailOptions;
