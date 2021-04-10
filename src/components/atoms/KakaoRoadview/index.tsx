import React, { useEffect, useRef } from "react";
import { ITailwind } from "../../../interfaces/Tailwind";
declare global {
  interface Window {
    kakao: any;
  }
}
interface IKakaoRoadviewProps extends ITailwind {
  lon: number;
  lat: number;
}

const KakaoRoadview: React.FC<IKakaoRoadviewProps> = ({
  lon,
  lat,
  children,
  className,
}) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const center = new window.kakao.maps.LatLng(lat, lon);
    const roadview = new window.kakao.maps.Roadview(container.current);
    const roadviewClient = new window.kakao.maps.RoadviewClient();
    roadviewClient.getNearestPanoId(center, 50, function (panoId: any) {
      if (panoId) {
        roadview.setPanoId(panoId, center);
      } else {
        //panoId가 없을 시 범위를 늘려서 다시 검색
        roadviewClient.getNearestPanoId(center, 300, function (panoId: any) {
          roadview.setPanoId(panoId, center);
        });
      }
    });
  }, [lat, lon]);

  return (
    <div className={className} ref={container}>
      {children}
    </div>
  );
};

export default KakaoRoadview;
