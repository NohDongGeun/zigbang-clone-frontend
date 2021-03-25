import React, { useEffect, useRef, useState } from "react";
declare global {
  interface Window {
    kakao: any;
  }
}
interface ILocation {
  coordinates: number[];
  type: string;
}
interface IPoint {
  point: ILocation;
}

interface IKakaoMapProps {
  lon: number;
  lat: number;
  className: string;
  level: number;
  type: "StaticMap" | "Map" | "Roadview";
  markers?: IPoint[];
}

const KakaoMap: React.FC<IKakaoMapProps> = ({
  lon,
  lat,
  className,
  type,
  level,
  children,
  markers,
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
        roadview.setPanoId(1023434522, center);
        roadview.setViewpoint({
          pan: 321,
          tilt: 0,
          zoom: 0,
        });

        return setMap(roadview);
      }
      return;
    });
  }, [lat, lon, level, type]);

  useEffect(() => {
    if (map === null || markers === undefined) {
      return;
    }

    const positions = markers.map(
      (position) =>
        new window.kakao.maps.Marker({
          position: new window.kakao.maps.LatLng(
            position.point.coordinates[0],
            position.point.coordinates[1]
          ),
        })
    );

    const clusterer = new window.kakao.maps.MarkerClusterer({
      map: map,
      averageCenter: true,
      minLevel: 1,
      disableClickZoom: true,
      calculater: [3, 6, 9],
      styles: [
        {
          width: "50px",
          height: "50px",
          background: "#FA880B",
          color: "white",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "20px",
          opacity: ".8",
          borderRadius: "30px",
          lineHeight: "51px",
          border: "1px solid #FA880B ",
        },
        {
          width: "70px",
          height: "70px",
          background: "#FA880B",
          color: "white",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "24px",
          opacity: ".8",
          borderRadius: "40px",
          lineHeight: "71px",
          border: "1px solid #FA880B",
        },
        {
          width: "90px",
          height: "90px",
          background: "#FA880B",
          color: "white",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "32px",
          opacity: ".8",
          borderRadius: "60px",
          lineHeight: "91px",
          border: "1px solid #FA880B",
        },
      ],
    });
    clusterer.setMinClusterSize(1);
    clusterer.addMarkers(positions);
    return () => {
      clusterer.removeMarkers(positions);
    };
  }, [markers]);

  return (
    <div ref={container} className={className}>
      {children}
    </div>
  );
};

export default KakaoMap;
