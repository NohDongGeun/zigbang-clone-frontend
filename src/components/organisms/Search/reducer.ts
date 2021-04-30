export type SearchItems = {
  name: string;
  location: string[];
};

type Search = {
  subway: SearchItems[];
  region: SearchItems[];
  loading: boolean;
  keyword: string;
};

type Action =
  | { type: "SET_KEYWORD"; keyword: string }
  | { type: "SET_SUBWAY"; subway: SearchItems[] }
  | { type: "SET_REGION"; region: SearchItems[] }
  | { type: "SET_LOADING"; loading: boolean }
  | { type: "SET_RESET" };

export const initialState: Search = {
  subway: [],
  region: [],
  loading: false,
  keyword: "",
};

export const searchReducer = (state: Search, action: Action) => {
  switch (action.type) {
    case "SET_RESET": {
      return initialState;
    }
    case "SET_KEYWORD": {
      return {
        ...state,
        loading: false,
        keyword: action.keyword,
      };
    }
    case "SET_REGION": {
      return {
        ...state,
        loading: true,
        region: action.region,
      };
    }
    case "SET_SUBWAY": {
      return {
        ...state,
        loading: true,
        subway: action.subway,
      };
    }
    case "SET_LOADING": {
      return {
        ...state,
        loading: action.loading,
      };
    }
  }
};
