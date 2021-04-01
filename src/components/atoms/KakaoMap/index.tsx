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
  level: number;
  type: "StaticMap" | "Map" | "Roadview";
}

const KakaoMap: React.FC<IKakaoMapProps> = ({
  lon,
  lat,
  className,
  type,
  level,
  children,
}) => {
  const container = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);

  useEffect(() => {
    if (container === null) {
      return;
    }
    window.kakao.maps.load(() => {
      const center = new window.kakao.maps.LatLng(lat, lon);
      const options = {
        center,
        level: level,
      };
      if (type === "Map") {
        const map = new window.kakao.maps.Map(container.current, options);
        return setMap(map);
      }
      if (type === "StaticMap") {
        const map = new window.kakao.maps.StaticMap(container.current, options);
        return setMap(map);
      }
      if (type === "Roadview") {
        const roadview = new window.kakao.maps.Roadview(container.current);
        const roadviewClient = new window.kakao.maps.RoadviewClient();
        roadviewClient.getNearestPanoId(center, 200, function (panoId: any) {
        
          roadview.setPanoId(panoId, center);
        });
        // roadview.setViewpoint({
        //   panoX: lon,
        //   panoY: lat,
        //   pan: 190.81137962049993,
        //   tilt: 6.749059174489842,
        //   zoom: 0,
        // });

        return setMap(roadview);
      }
    });
  }, [lat, lon, level, type]);

  return (
    <div ref={container} className={className}>
      {children}
    </div>
  );
};

export default KakaoMap;
