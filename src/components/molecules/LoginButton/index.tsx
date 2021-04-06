import React from "react";
import { Button, Heading, Img } from "../..";

interface LoginButtonProps {
  src: string;
  alt: string;
  label: string;
  className: string;
  onClick?: () => void;
}

const LoginButton: React.FC<LoginButtonProps> = ({
  src,
  alt,
  label,
  onClick,
  className,
}) => {
  return (
    <Button
      onClick={onClick}
      className={[
        "flex flex-1 justify-center items-center border border-gray-300 rounded-3xl",
        ,
        className,
      ].join(" ")}
    >
      <div className={"px-4 py-2 flex flex-row justify-center items-center"}>
        <Img src={src} className={"w-7 h-7 mr-1"} alt={alt} />
        <Heading Type={"h2"} label={label} />
      </div>
    </Button>
  );
};

export default LoginButton;
