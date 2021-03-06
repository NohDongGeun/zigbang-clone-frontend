import React from "react";
import { ITailwind } from "../../../interfaces/Tailwind";

export interface IHeadingProps extends ITailwind {
  /**
   * h1~h5 정하기
   */
  Type: "h1" | "h2" | "h3" | "h4" | "h5";

  /**
   * heading에 들어갈 label
   */
  label: string;
}

const Heading: React.FC<IHeadingProps> = ({ Type, label, ...props }) => {
  return <Type {...props}>{label}</Type>;
};

export default Heading;
