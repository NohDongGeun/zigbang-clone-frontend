import React from "react";
import { ITailwind } from "../../../interfaces/Tailwind";

interface IIconProps extends ITailwind {
  /**
   * img alt
   */
  alt: string;

  /**
   * img 소스
   */
  src: string;
}

const Icon: React.FC<IIconProps> = ({ ...props }) => {
  return <img {...props}></img>;
};

export default Icon;
