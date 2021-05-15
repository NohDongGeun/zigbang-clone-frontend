export const useRoomType = (roomType: string) => {
  let type: string = "";
  switch (roomType) {
    case "oneRoom": {
      return (type = "원룸");
    }
    case "twoRoom": {
      return (type = "투룸");
    }
    case "threeRoom": {
      return (type = "쓰리룸");
    }
    case "threeRoomPlus": {
      return (type = "포룸이상");
    }
  }

  return type;
};
