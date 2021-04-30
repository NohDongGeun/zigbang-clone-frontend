import { valueFromAST } from "graphql";
import React, { useEffect, useReducer, useRef, useState } from "react";
import { Button, Input, NoSearch, SearchBox, SearchItem, Text } from "../..";
import { searchLocationVar } from "../../../apollo";
import { BiSearch } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { useHistory } from "react-router";
import { MdPlace, MdDirectionsSubway } from "react-icons/md";
import { initialState, searchReducer, SearchItems } from "./reducer";

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
  const history = useHistory();

  // useEffect(() => {
  //   console.log(state);
  // }, [state]);

  useEffect(() => {}, [state.keyword]);

  useEffect(() => {
    if (state.keyword.length < 1 || state.loading) return;
    handleSearchPlace(state.keyword);
    // const timer = setTimeout(() => handleSearchPlace(state.keyword), 1000);
    // return () => {
    //   clearTimeout(timer);
    // };
  }, [state.keyword]);

  const handleSearchPlace = async (value: string) => {
    const isSubway = value.charAt(value.length - 1);
    try {
      if (isSubway === "역") {
        const subways = handleSubwaySearch(value);
        return;
      }
      await handleGeocoder(value);
      await handleSubwaySearch(value);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGeocoder = async (value: string) => {
    const geocoder = new window.kakao.maps.services.Geocoder();
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
        
        return dispatch({ type: "SET_REGION", region: regions });
      }
    });
  };

  const handleSubwaySearch = async (value: string) => {
    const ps = new window.kakao.maps.services.Places();
    await ps.keywordSearch(value, subwaySearchCB, {
      category_group_code: "SW8",
    });
  };

  const subwaySearchCB = (data: any) => {
    const subways = data.reduce((acc: IKeyword[], cur: any, i: number) => {
      acc.push({ name: cur.place_name, location: [cur.y, cur.x] });
      return acc;
    }, []);
    return dispatch({ type: "SET_SUBWAY", subway: subways });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  
    const {
      target: { value },
    } = e;
    return dispatch({ type: "SET_KEYWORD", keyword: value });
  };

  const handleButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { value } = e.target as HTMLButtonElement;
    const afterValue = value.split(",");

    searchLocationVar([afterValue[0], afterValue[1]]);
    dispatch({ type: "SET_RESET" });
  };

  const handleKeyDown = () => {
    // if (state.keyword.length < 1 || state.loading) return;
    // handleSearchPlace(state.keyword);
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
          <Button onClick={console.log}>
            <FaTimes className={"text-gray-300"} />
          </Button>
        )}
        <div
          className={`${
            state.keyword ? "flex h-80" : "hidden"
          } absolute transform -translate-x-3 translate-y-48  flex-col rounded-xl bg-white w-full p-3`}
        >
          <SearchBox loading={state.loading}>
            {state.subway === [] && state.region === [] && <NoSearch />}
            {state.subway?.map((e, i) => {
              return (
                <SearchItem
                  handleItem={handleButton}
                  name={e.name}
                  value={e.location}
                  key={i}
                  Icon={MdDirectionsSubway}
                />
              );
            })}
            {state.region?.map((e, i) => {
              return (
                <SearchItem
                  handleItem={handleButton}
                  name={e.name}
                  value={e.location}
                  key={i}
                  Icon={MdPlace}
                />
              );
            })}
          </SearchBox>
        </div>
      </div>
    </>
  );
};

export default Search;
