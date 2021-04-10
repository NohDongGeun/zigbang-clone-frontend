import React, { useEffect, useMemo, useRef } from "react";
import ReactDOM from "react-dom";
import DaumPostcode from "react-daum-postcode";

interface IRoomPostcode {
  closeWindowPortal: () => void;
}

const RoomPostcode: React.FC<IRoomPostcode> = ({
  children,
  closeWindowPortal,
}) => {
  const ref = useMemo(() => document.createElement("div"), []);

  useEffect(() => {
    const externalWindow = window.open(
      "",
      "우편번호 서비스",
      "width=600,height=400,left=200,top=200"
    );
    externalWindow?.document.body.appendChild(ref);
    externalWindow?.addEventListener("beforeunload", () => {
      closeWindowPortal();
    });
    return () => {
      externalWindow?.close();
    };
  }, [ref, closeWindowPortal]);
  return ReactDOM.createPortal(children, ref);
};

export default RoomPostcode;
