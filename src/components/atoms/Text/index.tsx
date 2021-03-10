import React from "react";
import { ITailwind } from "../../../interfaces/Tailwind";

interface ITextProps extends ITailwind {
  /**
   * text label
   */
  label: string;
}

const Text: React.FC<ITextProps> = ({ label, ...props }) => {
  return <p {...props}>{label}</p>;
};

export default Text;
