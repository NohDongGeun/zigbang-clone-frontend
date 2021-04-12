export type CreateRoom = {
  dealType: string;
  roomType: string;
  deposit: string;
  rent: string;
  floor: string;
  buildingFloor: string;
  isParking: string;
  expense: string;
  expenses: string[];
  options: string[];
  possibleMove: string;
  exclusiveArea: string;
  supplyArea: string;
  content: string;
  title: string;
  address: string;
  location: number[];
  images: File[];
};

type Action =
  | { type: "CHANGE_INPUT"; name: string; value: string }
  | { type: "SET_DEALTYPE"; dealType: string }
  | { type: "SET_ROOMTYPE"; roomType: string }
  | { type: "SET_ISPARKING"; isParking: string }
  | { type: "SET_EXPENSES"; expenses: string }
  | { type: "SET_OPTIONS"; options: string }
  | { type: "SET_LOCATION"; location: number[]; address: string }
  | { type: "SET_IMAGES"; image: File }
  | { type: "REMOVE_IMAGES"; i: number };

export const initialState: CreateRoom = {
  deposit: "",
  rent: "",
  floor: "",
  buildingFloor: "",
  expense: "",
  exclusiveArea: "",
  supplyArea: "",
  dealType: "",
  roomType: "",
  options: [],
  expenses: [],
  isParking: "",
  possibleMove: "",
  content: "",
  title: "",
  address: "",
  location: [],
  images: [],
};

export const registerReducer = (state: CreateRoom, action: Action) => {
  switch (action.type) {
    case "CHANGE_INPUT": {
      return {
        ...state,
        [action.name]: action.value,
      };
    }
    case "SET_DEALTYPE": {
      return action.dealType === state.dealType
        ? state
        : { ...state, dealType: action.dealType };
    }
    case "SET_ROOMTYPE": {
      return action.roomType === state.roomType
        ? state
        : { ...state, roomType: action.roomType };
    }
    case "SET_ISPARKING": {
      return action.isParking === state.isParking
        ? state
        : { ...state, isParking: action.isParking };
    }
    case "SET_EXPENSES": {
      return state.expenses.indexOf(action.expenses) === -1
        ? { ...state, expenses: state.expenses.concat(action.expenses) }
        : {
            ...state,
            expenses: state.expenses.filter((v) => v !== action.expenses),
          };
    }
    case "SET_OPTIONS": {
      return state.options.indexOf(action.options) === -1
        ? { ...state, options: state.options.concat(action.options) }
        : {
            ...state,
            options: state.options.filter((v) => v !== action.options),
          };
    }
    case "SET_LOCATION": {
      return {
        ...state,
        address: action.address,
        location: action.location,
      };
    }
    case "SET_IMAGES": {
      return {
        ...state,
        images: state.images.concat(action.image),
      };
    }
    case "REMOVE_IMAGES": {
      return {
        ...state,
        images: state.images.filter((v, index) => index !== action.i),
      };
    }
    default: {
      return state;
    }
  }
};
