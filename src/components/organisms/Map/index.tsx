import { useReactiveVar } from "@apollo/client";
import React, { useEffect, useRef, useState } from "react";
import { locationVar, searchLocationVar } from "../../../apollo";
import { locationMutation_filteredLocation_locations } from "../../../__generated__/locationMutation";
import Filter from "../Filter";

declare global {
  interface Window {
    kakao: any;
  }
}

//dist,중심좌표 전역변수로
interface IMap {
  point?: locationMutation_filteredLocation_locations[];
}

const Map: React.FC<IMap> = ({ point }) => {
  const container = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);
  const search = useReactiveVar(searchLocationVar);

  useEffect(() => {
    window.kakao.maps.load(() => {
      const center = new window.kakao.maps.LatLng(search[0], search[1]);
      const options = {
        center,
        level: 8,
      };
      const map = new window.kakao.maps.Map(container.current, options);
      setMap(map);
      window.kakao.maps.event.addListener(map, "idle", function () {
        const center = map.getCenter();
        const getNorthEast = map.getBounds().getNorthEast();
        const getSouthWest = map.getBounds().getSouthWest();
        const dist = [
          getSouthWest.La,
          getNorthEast.Ma,
          getNorthEast.La,
          getSouthWest.Ma,
        ];
        const coordinates = [center.Ma, center.La];
        locationVar({ coordinates, dist });
      });
    });
  }, []);

  //좌표 변경시 마다 마커 다시 그려주기
  useEffect(() => {
    if (!point || map === null) {
      return;
    }
    const positions = point.map(
      (position) =>
        new window.kakao.maps.Marker({
          position: new window.kakao.maps.LatLng(
            position.point.coordinates[1],
            position.point.coordinates[0]
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
          background: "#1257A1",
          color: "white",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "20px",
          opacity: ".8",
          borderRadius: "30px",
          lineHeight: "51px",
          border: "1px solid #1257A1",
        },
        {
          width: "70px",
          height: "70px",
          background: "#1257A1",
          color: "white",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "24px",
          opacity: ".8",
          borderRadius: "40px",
          lineHeight: "71px",
          border: "1px solid #1257A1",
        },
        {
          width: "90px",
          height: "90px",
          background: "#1257A1",
          color: "white",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "32px",
          opacity: ".8",
          borderRadius: "60px",
          lineHeight: "91px",
          border: "1px solid #1257A1",
        },
      ],
    });
    console.log(positions);
    clusterer.setMinClusterSize(1);
    clusterer.addMarkers(positions);

    return () => {
      clusterer.removeMarkers(positions);
    };
  }, [point, map]);

  useEffect(() => {
    if (map != null) {
      //지도 중심좌표 등록
      const moveLatLon = new window.kakao.maps.LatLng(search[0], search[1]);
      //지도 레벨 변경
      map.setLevel(3);
      // 지도 중심 이동
      map.setCenter(moveLatLon);
      const center = map.getCenter();
      const getNorthEast = map.getBounds().getNorthEast();
      const getSouthWest = map.getBounds().getSouthWest();
      const dist = [
        getSouthWest.La,
        getNorthEast.Ma,
        getNorthEast.La,
        getSouthWest.Ma,
      ];
      const coordinates = [center.Ma, center.La];
      locationVar({ coordinates, dist });
    }
  }, [search]);

  return (
    <article className={"w-full sm:w-700  md:w-800 h-full relative"}>
      <Filter />
      <div ref={container} className={"w-full h-full"}></div>
    </article>
  );
};
export default Map;
