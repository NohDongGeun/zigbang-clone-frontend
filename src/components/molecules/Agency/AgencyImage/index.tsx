import React from "react";
import { ITailwind } from "../../../../interfaces/Tailwind";

interface IAgencyImage extends ITailwind {
  src: string;
}

const AgencyImage: React.FC<IAgencyImage> = ({ src, className }) => {
  return (
    <div
      className={[
        "bg-contain rounded-full w-20 h-20 border border-gray-300",
        className,
      ].join(" ")}
      style={{ backgroundImage: `url(${src})` }}
    ></div>
  );
};
export default AgencyImage;
