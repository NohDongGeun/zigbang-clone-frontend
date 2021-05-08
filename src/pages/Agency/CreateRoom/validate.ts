import { Room, RoomErrors } from "./reducer";

export const validateInput = (name: string, value: string) => {
  let error: boolean = false;

  if (value === "") return (error = true);
  const valueToNum = +value;
  switch (name) {
    case "deposit": {
      valueToNum > 0 && valueToNum < 100000 ? (error = false) : (error = true);
      break;
    }
    case "rent": {
      valueToNum >= 0 && valueToNum <= 500 ? (error = false) : (error = true);
      break;
    }
    case "floor":
    case "buildingFloor":
    case "expense":
    case "exclusiveArea":
    case "supplyArea":
      valueToNum > 0 ? (error = false) : (error = true);
      break;
  }
  return error;
};

export const createRoomValidate = (
  room: Room,
  errors: RoomErrors,
  prevUrl: string | string[]
) => {
  let error: boolean = false;
  let message: string = "";
  const {
    rentError,
    depositError,
    floorError,
    buildingFloorError,
    exclusiveAreaError,
    supplyAreaError,
    expenseError,
  } = errors;
  //errors에 에러가 있는지 검사
  if (
    rentError === true ||
    depositError === true ||
    floorError === true ||
    buildingFloorError === true ||
    exclusiveAreaError === true ||
    supplyAreaError === true ||
    expenseError === true
  ) {
    error = true;
    message = "입력란을 다시 확인해주세요.";
    return {
      error,
      message,
    };
  }

  //input validation 다시 확인
  if (
    room.rent === "" ||
    room.deposit === "" ||
    room.floor === "" ||
    room.buildingFloor === "" ||
    room.exclusiveArea === "" ||
    room.supplyArea === "" ||
    room.expense === ""
  ) {
    error = false;
    message = "입력란을 다시 확인해주세요.";
    return { error, message };
  }
  //주소 검사
  if (room.location === [] || room.address === "") {
    error = true;
    message = "주소를 다시 확인해 주세요.";
    return { error, message };
  }
  //이미지 검사
  if (room.images.length < 1 && prevUrl.length < 1) {
    error = true;
    message = "사진을 등록해 주세요.";
    return {
      error,
      message,
    };
  }
  //이미지 개수 검사

  if (prevUrl.length < 3 || prevUrl.length > 6) {
    error = true;
    message = "사진은 3장에서 6장까지 등록 가능합니다.";
    return {
      error,
      message,
    };
  }
  //거래유형 검사
  if (room.dealType === "") {
    error = true;
    message = "거래 유형을 선택해주세요.";
    return {
      error,
      message,
    };
  }
  //방 유형 검사
  if (room.roomType === "") {
    error = true;
    message = "방 유형을 선택해주세요.";
    return {
      error,
      message,
    };
  }

  if (room.isParking === "") {
    error = true;
    message = "주차가능여부를 선택해주세요.";
    return {
      error,
      message,
    };
  }

  return { error, message };
};
