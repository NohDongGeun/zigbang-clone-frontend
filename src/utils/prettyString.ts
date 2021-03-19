export const prettyString = (value: number[], maximum: number) => {
  const min = value[0];
  const max = value[1];

  //1.부터 : max가 600일때
  //2.까지 : min가 0일때
  //3.전체 : min가 0 이고 max 가 600일때
  //4. 123을 제외하고
  if (min === 0 && max === maximum) {
    return `전체`;
  } else if (max === maximum) {
    return `${valuetoString(min)}부터`;
  } else if (min === 0) {
    return `${valuetoString(max)}까지`;
  } else {
    return `${valuetoString(min)} ~ ${valuetoString(max)}`;
  }
};

export const valuetoString = (value: number) => {
  if (value < 10000) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const korean = Math.floor(value / 10000);

  const arr = value - korean * 10000;
  if (arr === 0) {
    return `${korean}억`;
  }
  const arr2 = arr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `${korean}억 ${arr2}`;
};
