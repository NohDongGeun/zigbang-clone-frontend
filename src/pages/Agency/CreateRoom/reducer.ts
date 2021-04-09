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
};

type Action =
  | { type: "CHANGE_INPUT"; name: string; value: string }
  | { type: "SET_DEALTYPE"; dealType: string }
  | { type: "SET_ROOMTYPE"; roomType: string }
  | { type: "SET_ISPARKING"; isParking: string }
  | { type: "SET_EXPENSES"; expenses: string }
  | { type: "SET_OPTIONS"; options: string }

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
    default: {
      return state;
    }
  }
};
