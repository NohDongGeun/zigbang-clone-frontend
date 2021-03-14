import React from "react";

interface IBackgroundImgProps {
  /**
   * 이미지 label
   */
  label: string;

  /**
   * 이미지 주소
   */
  src: string;
}

const BackgroundImg: React.FC<IBackgroundImgProps> = ({ label, src }) => {
  return (
    <div
      className={
        "flex w-1/4 h-24 bg-42 bg-top bg-no-repeat justify-center items-center text-sm text-gray-500 pt-1"
      }
      style={{ backgroundImage: `url(${src})` }}
    >
      {label}
    </div>
  );
};
export default BackgroundImg;
