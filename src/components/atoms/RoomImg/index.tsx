import React from "react";
import Button from "../Button";
import xImg from "../../../assets/img/x_image.png";
import "./styles.css";
import Img from "../Img";

interface IRoomImgProps {
  src: string;
  alt: string;
  onRemove: () => void;
}

const RoomImg: React.FC<IRoomImgProps> = ({ src, onRemove }) => {
  return (
    <div
      className={
        "relative w-136 sm:w-200 square  mb-2  mr-2 even:mr-0 sm:even:mr-2 "
      }
    >
      <div
        className={
          "absolute z-0 w-full h-full sm:w-200 mr-2 even:mr-0 sm:even:mr-2 border border-gray-300  bg-no-repeat bg-cover bg-center"
        }
        style={{ backgroundImage: `url(${src})` }}
      >
        <div
          className={"absoulte transform translate-x-0 w-full flex justify-end"}
        >
          <Button className={"  z-10"} onClick={onRemove}>
            <img className={"w-6 h-6"} src={xImg} alt={"사진 지우기"} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RoomImg;
