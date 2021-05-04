type Room = {
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
type CreateRoomState = {
  room: Room;
  isError: boolean;
  isLoading: boolean;
  prevUrl: string[];
  showPortal: boolean;
  ErrorMessage: string;
};

type Action =
  | { type: "CHANGE_INPUT"; name: string; value: string }
  | { type: "SET_DEALTYPE"; dealType: string }
  | { type: "SET_ROOMTYPE"; roomType: string }
  | { type: "SET_ISPARKING"; isParking: string }
  | { type: "SET_EXPENSES"; expenses: string }
  | { type: "SET_OPTIONS"; options: string }
  | { type: "SET_LOCATION"; location: number[]; address: string }
  | { type: "SET_IMAGES"; images: File[] }
  | { type: "REMOVE_IMAGES"; i: number }
  | { type: "SET_PORTAL"; portal: boolean }
  | { type: "SET_PREVURL"; prevUrl: string }
  | { type: "SET_ERROR"; isError: boolean; message: string }
  | { type: "SET_LOADING"; isLoading: boolean };

export const initialState: CreateRoomState = {
  room: {
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
  },
  isError: false,
  ErrorMessage: "",
  isLoading: false,
  prevUrl: [],
  showPortal: false,
};

export const registerReducer = (state: CreateRoomState, action: Action) => {
  switch (action.type) {
    case "CHANGE_INPUT": {
      return {
        ...state,
        room: { ...state.room, [action.name]: action.value },
      };
    }
    case "SET_DEALTYPE": {
      return action.dealType === state.room.dealType
        ? state
        : { ...state, room: { ...state.room, dealType: action.dealType } };
    }
    case "SET_ROOMTYPE": {
      return action.roomType === state.room.roomType
        ? state
        : { ...state, room: { ...state.room, roomType: action.roomType } };
    }
    case "SET_ISPARKING": {
      return action.isParking === state.room.isParking
        ? state
        : { ...state, room: { ...state.room, isParking: action.isParking } };
    }
    case "SET_EXPENSES": {
      return state.room.expenses.indexOf(action.expenses) === -1
        ? {
            ...state,
            room: {
              ...state.room,
              expenses: state.room.expenses.concat(action.expenses),
            },
          }
        : {
            ...state,
            room: {
              ...state.room,
              expenses: state.room.expenses.filter(
                (v) => v !== action.expenses
              ),
            },
          };
    }
    case "SET_OPTIONS": {
      return state.room.options.indexOf(action.options) === -1
        ? {
            ...state,
            room: {
              ...state.room,
              options: state.room.options.concat(action.options),
            },
          }
        : {
            ...state,
            room: {
              ...state.room,
              options: state.room.options.filter((v) => v !== action.options),
            },
          };
    }
    case "SET_LOCATION": {
      return {
        ...state,
        room: {
          ...state.room,
          address: action.address,
          location: action.location,
        },
      };
    }
    case "SET_IMAGES": {
      return {
        ...state,
        room: {
          ...state.room,
          images: state.room.images.concat(action.images),
        },
      };
    }
    case "REMOVE_IMAGES": {
      return {
        ...state,
        prevUrl: state.prevUrl.filter((v, index) => index !== action.i),
        room: {
          ...state.room,
          images: state.room.images.filter((v, index) => index !== action.i),
        },
      };
    }
    case "SET_PORTAL": {
      return {
        ...state,
        showPortal: action.portal,
      };
    }
    case "SET_PREVURL": {
      return {
        ...state,
        prevUrl: state.prevUrl.concat(action.prevUrl),
      };
    }
    case "SET_ERROR": {
      return {
        ...state,
        isError: action.isError,
        ErrorMessage: action.message,
      };
    }
    case "SET_LOADING": {
      return {
        ...state,
        isLoading: action.isLoading,
      };
    }
    default: {
      return state;
    }
  }
};
