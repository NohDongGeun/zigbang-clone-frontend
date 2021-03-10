import React from "react";
import { Link } from "react-router-dom";
import { ITailwind } from "../../../interfaces/Tailwind";

export interface IButtonProps extends ITailwind {
  /**
   * react-router-dom Link 활용
   */
  to?: string;

  /**
   * button text
   */
  label: string;

  /**
   * Click 이벤트 처리
   */
  onClick?: () => void;

  /**
   * 버튼 클릭 여부
   */
  canClick?: boolean;

  /**
   * canClick이 false 일때 tailwind className
   */
  unableClassName?: string;
}

const Button: React.FC<IButtonProps> = ({
  to,
  onClick,
  className,
  canClick = true,
  unableClassName,
  label,
}) => {
  return (
    <>
      {to ? (
        <Link to={to} className={className}>
          {label}
        </Link>
      ) : (
        <button
          className={
            canClick
              ? className
              : ["bg-gray-300 pointer-events-none", unableClassName].join(" ")
          }
          onClick={onClick}
        >
          {label}
        </button>
      )}
    </>
  );
};

export default Button;
