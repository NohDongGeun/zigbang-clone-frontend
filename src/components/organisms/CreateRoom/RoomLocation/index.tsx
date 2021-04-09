import React from "react";
import { Text } from "../../..";
import KakaoMap from "../../../atoms/KakaoMap";


interface IRoomLocation {
  address: string;
  location: number[];
}

const RoomLocation: React.FC<IRoomLocation> = ({ address, location }) => {
  return (
    <>
      {address && (
        <div className={"w-full h-455"}>
          <Text label={`주소: ${address}`} />
          <KakaoMap
            className={"w-full h-full"}
            type={"StaticMap"}
            lon={location[0]}
            lat={location[1]}
            level={3}
          />
        </div>
      )}
    </>
  );
};
export default RoomLocation;
