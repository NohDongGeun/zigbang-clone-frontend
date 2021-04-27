import { valueFromAST } from "graphql";
import React, { useEffect, useRef, useState } from "react";
import { Button, Input } from "../..";
import { searchLocationVar } from "../../../apollo";
import { BiSearch } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { useHistory } from "react-router";

declare global {
  interface Window {
    kakao: any;
  }
}

interface IKeyword {
  name: string;
  location: string[];
}

const Search: React.FC = () => {
  const [ready, setReady] = useState<boolean>(true);
  const [keyword, setKeyword] = useState<string>("");
  const [region, setRegion] = useState<IKeyword[] | null>(null);
  const [subway, setSubway] = useState<IKeyword[] | null>(null);
  const [nullMessage, setNullMessage] = useState<string>("");
  const loading = useRef<boolean>(false);
  const history = useHistory();

  useEffect(() => {
    if (keyword.length < 1 || loading.current) return;
    const timer = setTimeout(() => handleSearchPlace(keyword), 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [keyword]);

  const handleSearchPlace = async (value: string) => {
    const isSubway = value.charAt(value.length - 1);
    try {
      loading.current = true;
      if (isSubway === "역") {
        await handleSubwaySearch(value);
        loading.current = false;
        return;
      }
      await handleGeocoder(value);
      await handleSubwaySearch(value);

      loading.current = false;
    } catch (error) {
      console.log(error);
    }
  };

  const handleGeocoder = async (value: string) => {
    const geocoder = await new window.kakao.maps.services.Geocoder();
    await geocoder.addressSearch(value, function (result: any, status: any) {
      // 정상적으로 검색이 완료됐으면
      if (status === window.kakao.maps.services.Status.OK) {
        const regions = result.reduce(
          (acc: IKeyword[], cur: any, i: number) => {
            acc.push({ name: cur.address_name, location: [cur.y, cur.x] });
            return acc;
          },
          []
        );
        return setRegion(regions);
      }
      return setRegion(null);
    });
  };

  const handleSubwaySearch = async (value: string) => {
    const ps = await new window.kakao.maps.services.Places();
    await ps.keywordSearch(value, subwaySearchCB, {
      category_group_code: "SW8",
    });
  };

  const subwaySearchCB = (data: any) => {
    if (data.length === 0) return setSubway(null);
    const subways = data.reduce((acc: IKeyword[], cur: any, i: number) => {
      acc.push({ name: cur.place_name, location: [cur.y, cur.x] });
      return acc;
    }, []);
    setSubway(subways);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setKeyword(value);
  };

  const handleButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { value } = e.target as HTMLButtonElement;
    const afterValue = value.split(",");

    console.log(afterValue[0]);
    searchLocationVar([afterValue[0], afterValue[1]]);
    setRegion([]);
    setKeyword("");
    setSubway([]);
  };

  const handleKeyDown = () => {
    if (keyword.length < 1 || loading.current) return;
    handleSearchPlace(keyword);
  };

  useEffect(() => {}, [keyword]);

  return (
    <>
      <div
        className={
          " p-3 rounded-xl w-full bg-white flex flex-row flex-shrink justify-start items-center shadow-3xl relative"
        }
      >
        <BiSearch size={"20"} className={"text-gray-300 mr-2"} />
        <input
          placeholder={"지역,지하철역 을 입력해주세요."}
          type={"text"}
          className={"w-full h-full outline-none"}
          onChange={handleChange}
          onKeyPress={() => handleKeyDown()}
          value={keyword}
        />
        {keyword && (
          <Button onClick={console.log}>
            <FaTimes className={"text-gray-300"} />
          </Button>
        )}
        <div
          className={`${
            keyword ? "flex h-80" : "hidden"
          } absolute transform -translate-x-3 translate-y-48  flex-col rounded-xl bg-white w-full  overflow-y-scroll`}
        >
          {subway === null && region === null && <p>없음</p>}
          {subway?.map((e, i) => {
            return (
              <button onClick={handleButton} value={e.location} key={i}>
                {e.name}
              </button>
            );
          })}
          {region?.map((e, i) => {
            return (
              <button onClick={handleButton} value={e.location} key={i}>
                {e.name}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Search;
