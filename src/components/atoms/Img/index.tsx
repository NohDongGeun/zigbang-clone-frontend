import React from "react";

interface IImgProps {
  /**
   * 이미지 소스
   */
  src: string;

  /**
   * 이미지 alt
   */
  alt: string;
}

const Img: React.FC<IImgProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
};

export default Img;
