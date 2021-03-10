import React from "react";
import { ITailwind } from "../../../interfaces/Tailwind";

interface ILabelProps extends ITailwind {
  /**
   * Label에 들어갈 label
   */
  label: string;
}

const Label: React.FC<ILabelProps> = ({ label, ...props }) => {
  return <label {...props}>{label}</label>;
};
export default Label;
