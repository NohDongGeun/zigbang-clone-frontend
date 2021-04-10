import React, { useState } from "react";
import { Button, Img, KakaoRoadview } from "../../..";
import KakaoMap from "../../../atoms/KakaoMap";
import mapImg from "../../../../assets/img/mapImg.png";
import roadviewImg from "../../../../assets/img/roadviewImg.png";

interface IDetailRoadview {
  lon: number;
  lat: number;
}

const DetailRoadview: React.FC<IDetailRoadview> = ({ lon, lat }) => {
  const [roadview, setRoadview] = useState<boolean>(true);

  const handleRoadview = () => {
    setRoadview(!roadview);
  };

  return (
    <>
      {roadview ? (
        <section className={"w-full h-full relative"}>
          <KakaoRoadview lat={lat} lon={lon} className={`w-full h-full`} />
          <Button
            className={`absolute z-10 transform -translate-y-24 translate-x-2 w-16 h-16  text-sm `}
            onClick={handleRoadview}
          >
            <Img src={mapImg} className={"w-full h-full"} alt={"지도로 보기"} />
          </Button>
        </section>
      ) : (
        <section className={"w-full h-full relative"}>
          <KakaoMap lat={lat} lon={lon} className={`w-full h-full`} />
          <Button
            className={`absolute z-10 transform -translate-y-24 translate-x-2 w-16 h-16  text-sm ${
              roadview && "hidden"
            }`}
            onClick={handleRoadview}
          >
            <Img
              src={roadviewImg}
              className={"w-full h-full"}
              alt={"로드뷰로 보기"}
            />
          </Button>
        </section>
      )}
    </>
    // <section className={"w-full h-full relative"}>
    //   <KakaoRoadview
    //     lat={lat}
    //     lon={lon}
    //     className={`w-full h-full ${roadview ===false && "hidden"}`}
    //   />
    //   <Button
    //     className={`absolute z-10 transform -translate-y-24 translate-x-2 w-16 h-16  text-sm ${
    //       !roadview && "hidden"
    //     }`}
    //     onClick={handleRoadview}
    //   >
    //     <Img src={mapImg} className={"w-full h-full"} alt={"지도로 보기"} />
    //   </Button>
    //   <KakaoMap
    //     lat={lat}
    //     lon={lon}
    //     type={"Map"}
    //     className={`w-full h-full ${roadview && "hidden"}`}
    //     level={3}
    //   />
    //   <Button
    //     className={`absolute z-10 transform -translate-y-24 translate-x-2 w-16 h-16  text-sm ${
    //       roadview && "hidden"
    //     }`}
    //     onClick={handleRoadview}
    //   >
    //     <Img
    //       src={roadviewImg}
    //       className={"w-full h-full"}
    //       alt={"로드뷰로 보기"}
    //     />
    //   </Button>
    // </section>
  );
};

export default DetailRoadview;
