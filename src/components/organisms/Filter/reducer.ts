import { DealType, RoomType, FloorType } from "../../../interfaces/Option";

export type Filter = {
  dealType: DealType;
  roomType: RoomType;
  deposit: number[];
  rent: number[];
  floorType: FloorType;
  isParking: boolean;
};

type Action =   
  | { type: "SET_DEALTYPE"; dealType: DealType }
  | { type: "SET_ROOMTYPE"; roomType: RoomType }
  | { type: "SET_DEPOSIT"; deposit: number[] }
  | { type: "SET_RENT"; rent: number[] }
  | { type: "SET_FLOORTYPE"; floorType: FloorType }
  | { type: "SET_ISPARKING" }
  | { type: "RESET" };

export const initialState: Filter = {
  dealType: "전체",
  roomType: "원룸",
  deposit: [0, 100000],
  rent: [0, 500],
  floorType: "전체",
  isParking: false,
};

export const filterReducer = (state: Filter, action: Action): Filter => {
  switch (action.type) {
    case "RESET": {
      return initialState;
    }
    case "SET_DEALTYPE": {
      return { ...state, dealType: action.dealType };
    }
    case "SET_ROOMTYPE": {
      return { ...state, roomType: action.roomType };
    }
    case "SET_DEPOSIT": {
      return { ...state, deposit: action.deposit };
    }
    case "SET_RENT": {
      return { ...state, rent: action.rent };
    }
    case "SET_FLOORTYPE": {
      return { ...state, floorType: action.floorType };
    }
    case "SET_ISPARKING": {
      return { ...state, isParking: !state.isParking };
    }
    default: {
      throw new Error(`unexpected action.type: ${action}`);
    }
  }
};
