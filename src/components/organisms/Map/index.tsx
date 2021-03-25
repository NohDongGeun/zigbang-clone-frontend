import React, { useEffect, useRef, useState } from "react";
import Filter from "../Filter";

declare global {
  interface Window {
    kakao: any;
  }
}

//dist,중심좌표 전역변수로
interface IMap {
  point?: any;
}

const Map: React.FC<IMap> = ({ point }) => {
  const container = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);
  const [dist, setDist] = useState<number>();
  const [center, setCenter] = useState<number>();

  useEffect(() => {
    window.kakao.maps.load(() => {
      const center = new window.kakao.maps.LatLng(37.413294, 127.269311);
      const options = {
        center,
        level: 3,
      };
      const map = new window.kakao.maps.Map(container.current, options);
      setMap(map);
      window.kakao.maps.event.addListener(map, "idle", function () {
        const center = map.getCenter();
        setCenter(center);
      });
    });
  }, []);

  useEffect(() => {}, [map]);

  return (
    <article className={"w-full sm:w-800 h-full relative"}>
      <Filter />
      <div ref={container} className={"w-full h-full"}></div>
    </article>
  );
};
export default Map;
