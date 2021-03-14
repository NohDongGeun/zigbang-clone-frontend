import React, { useEffect, useRef, useState } from "react";
declare global {
  interface Window {
    kakao: any;
  }
}
interface IKakaoMapProps {
  lon: number;
  lat: number;
  className: string;
  type: "StaticMap" | "Map" | "roadview";
}

const KakaoMap: React.FC<IKakaoMapProps> = ({ lon, lat, className, type }) => {
  const container = useRef<HTMLDivElement>(null);
  const staticContainer = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);

  useEffect(() => {
    if (type !== "Map") {
      return;
    }
    window.kakao.maps.load(() => {
      console.log("map");
      const center = new window.kakao.maps.LatLng(lat, lon);
      const options = {
        center,
        level: 3,
      };
      const map = new window.kakao.maps.Map(container.current, options);
      setMap(map);
    });
  }, [container]);

  useEffect(() => {
    if (type !== "StaticMap") {
      return;
    }

    window.kakao.maps.load(() => {
      console.log("staticmap");
      const center = new window.kakao.maps.LatLng(lat, lon);
      const options = {
        center,
        level: 3,
        marker: {
          position: new window.kakao.maps.LatLng(lat, lon), // 좌표가 없으면 이미지 지도 중심에 마커가 표시된다.
          text: "마커 위에 텍스트가 함께 표시된다", // 지정하지 않으면 마커만 표시된다.
        },
      };
      const map = new window.kakao.maps.StaticMap(
        staticContainer.current,
        options
      );
      setMap(map);
    });
  }, [staticContainer]);

  return (
    <>
      {type === "StaticMap" ? (
        <div ref={staticContainer} className={className}></div>
      ) : type === "Map" ? (
        <div ref={container} className={className}></div>
      ) : null}
    </>
  );
};

export default KakaoMap;
