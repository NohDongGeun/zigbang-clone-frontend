import React from "react";
import { ITailwind } from "../../../interfaces/Tailwind";

interface IImgProps extends ITailwind {
  /**
   * 이미지 소스
   */
  src: string;

  /**
   * 이미지 alt
   */
  alt: string;
}

const Img: React.FC<IImgProps> = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={className} />;
};

export default Img;
