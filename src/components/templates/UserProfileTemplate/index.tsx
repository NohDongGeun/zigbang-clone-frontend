import React from "react";
import { useFormContext } from "react-hook-form";
import { AuthForm, Button, Img, ProfileBox, Text } from "../..";
import chevron from "../../../assets/img/chevron.png";

interface IUserProfile {
  email: string;
  name: string;
  phone: string | null;
  logout: () => void;
}

const UserProfileTemplate: React.FC<IUserProfile> = ({
  email,
  name,
  phone,
  logout,
}) => {
  return (
    <div className={"w-screen h-screen flex justify-center sm:items-center"}>
      <section
        className={
          "w-full  sm:w-400  sm:border sm:border-gray-300 flex flex-col px-2 sm:px-5"
        }
      >
        <ProfileBox label={"이메일"} placeholder={email} />
        <ProfileBox
          to={"/my/profile/modify_name"}
          label={"이름"}
          placeholder={name}
        />
        <ProfileBox
          to={"/my/profile/modify_password"}
          label={"비밀번호"}
          placeholder={"********"}
        />
        <ProfileBox
          to={phone ? undefined : "/my/auth/verify"}
          label={"핸드폰"}
          placeholder={phone ? phone : "인증하기"}
        />
        <Button
          className={
            "my-5 p-3 text-white bg-black rounded-md hover:bg-gray-900 border border-gray-300"
          }
          label={"로그아웃"}
          onClick={logout}
        />
      </section>
    </div>
  );
};

export default UserProfileTemplate;
