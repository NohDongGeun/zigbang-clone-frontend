import React, { useState } from "react";
import { Button, Icon, Text, Heading } from "../../..";
import arrowUp from "../../../../assets/img/arrowUp.png";

interface IDetailBar {
  /**
   * bar 제목
   */
  label: string;

  /**
   * bar 부제목
   */
  subLabel?: string;
}

const DetailBar: React.FC<IDetailBar> = ({ label, children, subLabel }) => {
  //false일시 메뉴 숨김
  const [able, setAble] = useState<boolean>(true);

  //메뉴 핸들러
  const handleBar = () => {
    return able ? setAble(false) : setAble(true);
  };

  return (
    <section className={"flex flex-col bg-white w-full mb-3"}>
      <Button
        className={`flex-row flex px-2 py-3 w-full items-center ${
          able ? "border-b border-gray-300" : "border-b-0"
        }`}
        onClick={handleBar}
      >
        <div className={"flex flex-col flex-auto justify-center items-start "}>
          <Heading className={"sm:text-xl text-lg"} label={label} Type={"h2"} />
          {subLabel ? (
            <Heading
              className={"sm:text-base text-sm text-gray-400 text-center"}
              label={subLabel}
              Type={"h3"}
            />
          ) : null}
        </div>
        <div className={"flex flex-auto justify-end"}>
          <Icon
            className={`w-6 transition delay-75 transform ease-in-out ${
              able ? "rotate-180" : "rotate-0"
            }`}
            src={arrowUp}
            alt={`${able ? "메뉴 숨기기" : "메뉴 보기"}`}
          />
        </div>
      </Button>
      <div className={"w-full"}>{able && children}</div>
    </section>
  );
};

export default DetailBar;
