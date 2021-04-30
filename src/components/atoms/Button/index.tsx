import React from "react";
import { Link } from "react-router-dom";
import { sidebarVar } from "../../../apollo";
import { ITailwind } from "../../../interfaces/Tailwind";

export interface IButtonProps extends ITailwind {
  /**
   * react-router-dom Link 활용
   */
  to?: string;

  /**
   * button type
   */
  type?: "button" | "submit";

  /**
   * button text
   */
  label?: string;

  /**
   * button name
   */
  name?: string;

  /**
   * button value
   */
  value?: string | number | string[];

  /**
   * Click 이벤트 처리
   */
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

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
  className,
  children,
  canClick = true,
  unableClassName,
  label,
  ...props
}) => {
  return (
    <>
      {to ? (
        <Link to={to} className={className} onClick={() => sidebarVar(false)}>
          {label}
          {children}
        </Link>
      ) : (
        <button
          className={
            canClick
              ? ["outline-none focus:outline-none", className].join(" ")
              : [
                  "outline-none focus:outline-none pointer-events-none",
                  unableClassName,
                ].join(" ")
          }
          {...props}
        >
          {label}
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
