import React, { useEffect, useReducer } from "react";
import { Button, NoSearch, SearchBox, SearchItem } from "../..";
import { searchLocationVar } from "../../../apollo";
import { BiSearch } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { MdPlace, MdDirectionsSubway } from "react-icons/md";
import { initialState, searchReducer } from "./reducer";

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
  const [state, dispatch] = useReducer(searchReducer, initialState);

  useEffect(() => {
    if (state.keyword === "") return handleReset();
    const timer = setTimeout(() => handleSearchPlace(state.keyword), 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [state.keyword]);

  const handleSearchPlace = (value: string) => {
    const isSubway = value.charAt(value.length - 1);
    dispatch({ type: "SET_LOADING", loading: true });
    if (isSubway === "역") {
      const subways = handleSubwaySearch(value);
      dispatch({ type: "SET_LOADING", loading: false });
      return;
    }
    handleGeocoder(value);
    handleSubwaySearch(value);
    return dispatch({ type: "SET_LOADING", loading: false });
  };

  const handleGeocoder = (value: string) => {
    const geocoder = new window.kakao.maps.services.Geocoder();
    const region = geocoder.addressSearch(value, function (
      result: any,
      status: any
    ) {
      if (status !== window.kakao.maps.services.Status.OK) {
        return dispatch({ type: "SET_REGION", region: [] });
      }
      // 정상적으로 검색이 완료됐으면
      const regions = result.reduce((acc: IKeyword[], cur: any, i: number) => {
        acc.push({ name: cur.address_name, location: [cur.y, cur.x] });
        return acc;
      }, []);
      dispatch({ type: "SET_REGION", region: regions });
    });
  };

  const handleSubwaySearch = (value: string) => {
    const ps = new window.kakao.maps.services.Places();
    const subways = ps.keywordSearch(value, subwaySearchCB, {
      category_group_code: "SW8",
    });
    return subways;
  };

  const subwaySearchCB = (data: any) => {
    console.log(data);
    const subways = data.reduce((acc: IKeyword[], cur: any, i: number) => {
      acc.push({ name: cur.place_name, location: [cur.y, cur.x] });
      return acc;
    }, []);
    console.log(subways);
    dispatch({ type: "SET_SUBWAY", subway: subways });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    return dispatch({ type: "SET_KEYWORD", keyword: value });
  };

  const handleButton = (point: string[]) => {
    searchLocationVar([point[0], point[1]]);
    dispatch({ type: "SET_RESET" });
  };
  const handleReset = () => {
    dispatch({ type: "SET_RESET" });
  };

  const handleKeyDown = () => {
    if (state.keyword.length < 1 || state.loading) return;
    handleSearchPlace(state.keyword);
  };

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
          value={state.keyword}
        />
        {state.keyword && (
          <Button onClick={handleReset}>
            <FaTimes className={"text-gray-300"} />
          </Button>
        )}
        <div
          className={`${
            state.keyword ? "flex h-72 sm:h-80" : "hidden"
          } absolute transform -translate-x-3 translate-y-44 sm:translate-y-48  flex-col rounded-xl bg-white  w-full p-3`}
        >
          <SearchBox loading={state.loading}>
            {state.subway?.map((e, i) => {
              return (
                <SearchItem
                  handleItem={() => handleButton(e.location)}
                  name={e.name}
                  value={e.location}
                  key={i}
                  Icon={MdDirectionsSubway}
                  coordinates={e.location}
                />
              );
            })}
            {state.region?.map((e, i) => {
              return (
                <SearchItem
                  coordinates={e.location}
                  handleItem={() => handleButton(e.location)}
                  name={e.name}
                  value={e.location}
                  key={i}
                  Icon={MdPlace}
                />
              );
            })}
            {state.subway.length < 1 && state.region.length < 1 && <NoSearch />}
          </SearchBox>
        </div>
      </div>
    </>
  );
};

export default Search;
