import React, { useEffect } from "react";

export const useOutsideClick = (
  ref: React.MutableRefObject<any>,
  handler: Function
) => {
  useEffect(() => {
    const listener = (event?: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};
