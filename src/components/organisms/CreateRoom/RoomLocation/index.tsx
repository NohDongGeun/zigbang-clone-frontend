import React, { useEffect } from "react";
import { Button, RegisterBox, RegisterLabel, Text } from "../../..";
import KakaoMap from "../../../atoms/KakaoMap";

declare global {
  interface Window {
    kakao: any;
  }
}

interface IRoomLocation {
  address: string;
  location: number[];
  onShowPortal: () => void;
}

const RoomLocation: React.FC<IRoomLocation> = ({
  onShowPortal,
  address,
  location,
}) => {
  useEffect(() => {
    console.log(address);
  }, [address]);

  return (
    <RegisterBox label={"위치정보"}>
      <RegisterLabel label={"주소"}>
        <Button
          className={"h-42 w-136 sm:w-200 border border-gray-300"}
          label={"주소 찾기"}
          onClick={onShowPortal}
        />
        {address && (
          <div className={"flex flex-col w-full"}>
            <Text
              className={"h-42 w-full flex justify-start items-center"}
              label={`주소: ${address}`}
            />
            <KakaoMap
              lon={location[0]}
              lat={location[1]}
              className={"w-full h-184 sm:h-80"}
            />
          </div>
        )}
      </RegisterLabel>
    </RegisterBox>
  );
};
export default RoomLocation;
