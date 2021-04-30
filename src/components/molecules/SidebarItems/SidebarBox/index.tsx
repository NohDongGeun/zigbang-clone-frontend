import React from "react";
import { IoMdClose } from "react-icons/io";
import { Button, Img, Text } from "../../..";
import logoBox from "../../../../assets/img/logobox.jpg";

interface ISidebarBox {
  handleSidebar: () => void;
  name?: string;
  email?: string;
}

const SidebarBox: React.FC<ISidebarBox> = ({ handleSidebar, name, email }) => {
  return (
    <div className={"flex w-full p-3 flex-col border-b"}>
      <div className={"flex  justify-end items-center"}>
        <Button
          onClick={handleSidebar}
          className={"w-14 hover:opacity-75  flex justify-end items-center"}
        >
          <IoMdClose className={"text-gray-300"} size={"30"} />
        </Button>
      </div>
      <div className={"px-3 py-5"}>
        <div
          className={
            "flex flex-row border border-gray-300 w-full rounded-xl justify-start items-center"
          }
        >
          <Img className={" p-3 h-20"} src={logoBox} alt={"로고박스"} />
          <div className={"w-full flex flex-col justify-center items-start"}>
            {name && email ? (
              <>
                <Text
                  className={"text-center font-bold text-xl text-gray-700"}
                  label={name}
                />
                <Text
                  className={"text-center font-semibold text-sm text-gray-500"}
                  label={email}
                />
              </>
            ) : (
              <Text
                className={"text-center font-bold text-base text-gray-700"}
                label={"로그인 후 이용해주세요"}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarBox;
