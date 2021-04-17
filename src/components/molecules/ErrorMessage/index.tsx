import React from "react";
import { Text } from "../..";

interface IErrorMessage {
  message: string;
}

const ErrorMessage: React.FC<IErrorMessage> = ({ message }) => {
  return (
    <section className={"w-full flex justify-center items-center"}>
      <Text label={message} className={"text-red-500"} />
    </section>
  );
};

export default ErrorMessage;
