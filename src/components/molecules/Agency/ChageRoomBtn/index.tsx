import React from "react";
import { Button } from "../../..";

interface IChageRoomBtnProps {
  onClickDelete: (() => void) | undefined;
  onClickActive: (() => void) | undefined;
  isActive: boolean;
}

const ChangeRoomBtn: React.FC<IChageRoomBtnProps> = ({
  onClickDelete,
  onClickActive,
  isActive,
}) => {
  return (
    <div className={"absolute transform right-0 px-3 z-10 "}>
      <Button
        onClick={onClickDelete}
        label={"삭제하기"}
        className={" mr-3 hover:opacity-75 text-red-500 font-semibold "}
      />
      <Button
        onClick={onClickActive}
        label={isActive ? "광고중지" : "광고하기"}
        className={"ml-3 text-blue-dark hover:opacity-75 font-semibold"}
      />
    </div>
  );
};

export default ChangeRoomBtn;
