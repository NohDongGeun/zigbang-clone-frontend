import React from "react";
import DaumPostcode from "react-daum-postcode";

interface IRoomPostcode {
  onComplete: () => void;
  isActive: boolean;
}

const RoomPostcode: React.FC<IRoomPostcode> = ({ onComplete, isActive }) => {
  return (
    <>
      {isActive && (
        <div
          className={
            "absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-full h-full sm:w-400 sm:h-455 border border-gray-300"
          }
        >
          <DaumPostcode
            style={{ width: "100%", height: "100%" }}
            onComplete={onComplete}
          />
        </div>
      )}
    </>
  );
};

export default RoomPostcode;
