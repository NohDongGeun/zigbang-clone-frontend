import React from "react";
import { Button, Img, Text } from "../..";
import chevron from "../../../assets/img/chevron.png";

interface IProfileBox {
  label: string;
  placeholder: string;
  to?: string;
}

const ProfileBox: React.FC<IProfileBox> = ({ label, placeholder, to }) => {
  return (
    <>
      <Text className={"my-4 text-gray-700"} label={label} />
      <Button
        to={to}
        className={
          "flex flex-row border border-gray-300 p-2  justify-between items-center focus:bg-gray-200"
        }
      >
        <Text
          className={"font-medium text-base text-gray-700 "}
          label={placeholder}
        />
        {to && (
          <Img className={"w-4 h-4"} src={chevron} alt={"이름 변경"} />
        )}
      </Button>
    </>
  );
};

export default ProfileBox;
