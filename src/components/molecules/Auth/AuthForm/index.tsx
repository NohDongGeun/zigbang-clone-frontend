import React from "react";
import { useFormContext } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button, ErrorMessage, Img } from "../../..";
import arrowLeft from "../../../../assets/img/arrow-left.png";

interface IAuthFormProps {
  label: string;
  onSubmit: () => void;
  to: string;
  message?: string;
}

const AuthForm: React.FC<IAuthFormProps> = ({
  children,
  label,
  onSubmit,
  message,
  to,
}) => {
  const { handleSubmit, formState } = useFormContext();

  return (
    <form
      className={
        "w-full h-full sm:w-400 sm:h-455 sm:border sm:border-gray-300 flex flex-col"
      }
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={" flex flex-initial flex-row sm:hidden  px-6 py-3"}>
        <Link to={to}>
          <Img className={"w-7 h-7"} src={arrowLeft} alt={"뒤로가기"} />
        </Link>
      </div>
      <div className={"flex flex-auto flex-col w-full  px-6"}>{children}</div>
      {message && <ErrorMessage message={message} />}
      <div
        className={`flex flex-auto justify-center items-end sm:px-6 sm:py-3`}
      >
        <Button
          className={` w-full py-3 font-bold ${
            formState.isValid
              ? "text-white bg-yellow-500"
              : "text-gray-700 bg-gray-300 pointer-events-none"
          }`}
          type={"submit"}
          label={label}
        />
      </div>
    </form>
  );
};

export default AuthForm;
