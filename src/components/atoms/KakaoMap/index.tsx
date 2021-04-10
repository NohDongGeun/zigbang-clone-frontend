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
}

const KakaoMap: React.FC<IKakaoMapProps> = ({
  lon,
  lat,
  className,
  children,
}) => {
  const container = useRef<HTMLDivElement>(null);
  const [kakaoMap, setKakaoMap] = useState<any>(null);
  const [kakaoMarker, setKakaoMarker] = useState<any>(null);

  useEffect(() => {
    if (container === null || lat === undefined) return;
    const mapOption = {
      center: new window.kakao.maps.LatLng(lat, lon),
      level: 3,
    };
    const map = new window.kakao.maps.Map(container.current, mapOption);

    const markerPosition = new window.kakao.maps.LatLng(lat, lon);

    const marker = new window.kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
    setKakaoMarker(marker);
    setKakaoMap(map);
  }, []);
  //중심 좌표 변경시
  useEffect(() => {
    if (kakaoMap === null) return;
    kakaoMarker.setMap(null);
    kakaoMap.setCenter(new window.kakao.maps.LatLng(lat, lon));
    const marker = new window.kakao.maps.Marker({
      map: kakaoMap,
      position: new window.kakao.maps.LatLng(lat, lon),
    });
    setKakaoMarker(marker);
  }, [lat, lon, kakaoMap]);

  return (
    <div ref={container} className={className}>
      {children}
    </div>
  );
};

export default KakaoMap;
