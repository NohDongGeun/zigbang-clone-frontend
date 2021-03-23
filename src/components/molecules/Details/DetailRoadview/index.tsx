import React, { useState } from "react";
import { Button, Img } from "../../..";
import KakaoMap from "../../../atoms/KakaoMap";
import mapImg from "../../../../assets/img/mapImg.png";
import roadviewImg from "../../../../assets/img/roadviewImg.png";

interface IDetailRoadview {
  location: number[];
}

const DetailRoadview: React.FC<IDetailRoadview> = ({ location }) => {
  const [roadview, setRoadview] = useState<boolean>(true);

  const handleRoadview = () => {
    setRoadview(!roadview);
  };

  return (
    <section className={"w-full h-full relative"}>
      <KakaoMap
        lat={location[0]}
        lon={location[1]}
        type={"Roadview"}
        className={`w-full h-full ${!roadview && "hidden"}`}
        level={3}
      />
      <Button
        className={
          "absolute z-10 transform -translate-y-24 translate-x-2 w-16 h-16  text-sm"
        }
        onClick={handleRoadview}
      >
        <Img src={mapImg} className={"w-full h-full"} alt={"지도로 보기"} />
      </Button>
      <KakaoMap
        lat={location[0]}
        lon={location[1]}
        type={"Map"}
        className={`w-full h-full ${roadview && "hidden"}`}
        level={3}
      />
      <Button
        className={
          "absolute z-10 transform -translate-y-24 translate-x-2 w-16 h-16  text-sm"
        }
        onClick={handleRoadview}
      >
        <Img
          src={roadviewImg}
          className={"w-full h-full"}
          alt={"로드뷰로 보기"}
        />
      </Button>
    </section>
  );
};

export default DetailRoadview;
