import React, { useEffect, useRef, useState } from "react";
import { Button, Text } from "../../..";
import KakaoMap from "../../../atoms/KakaoMap";
import DetailBar from "../DetailBar";

interface IDetailMap {
  lon: number;
  lat: number;
  onRoadview: () => void;
  address: string;
}

const DetailMap: React.FC<IDetailMap> = ({ lon, lat, address, onRoadview }) => {
  return (
    <DetailBar label={"위치"}>
      <Text
        label={address}
        className={"text-gray-400 font-semibold  px-3 py-3"}
      />
      <div className={"w-full px-3 "}>
        <div className={"relative w-full border border-gray-200 mb-3"}>
          <KakaoMap
            lon={126.570667}
            lat={33.450701}
            level={3}
            className={"w-full h-52 pointer-events-none "}
            type={"StaticMap"}
          />
          <Button
            className={
              "absolute z-10 transform -translate-y-14 w-full bg-transparent h-14 border bg-white bg-opacity-80"
            }
            onClick={onRoadview}
          >
            <Text label={"로드뷰 보기"} />
          </Button>
        </div>
      </div>
    </DetailBar>
  );
};

export default DetailMap;
