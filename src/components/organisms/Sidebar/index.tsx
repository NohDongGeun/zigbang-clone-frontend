import React, { useRef } from "react";
import {
  Button,
  Img,
  SidebarAgencyNav,
  SidebarBox,
  SidebarUserNav,
  SideLoginForm,
  Text,
} from "../..";
import logoBox from "../../../assets/img/logobox.jpg";
import { useReactiveVar } from "@apollo/client";
import { authTokenVar, isLoggedInVar, sidebarVar } from "../../../apollo";
import { useOutsideClick } from "../../../hooks/useOutsideClick";
import { IoMdClose } from "react-icons/io";
import { FormProvider, useForm } from "react-hook-form";
import { useLogin } from "../../../hooks/useLogin";
import { useMe } from "../../../hooks/useMe";
import { useHistory, useLocation } from "react-router";
import { useLogout } from "../../../hooks/useLogout";

const Sidebar = () => {
  const { data } = useMe();
  const location = useLocation();
  const history = useHistory();
  const onSidebar = useReactiveVar(sidebarVar);
  const logout = useLogout();
  const ref = useRef<HTMLDivElement>(null);
  const method = useForm<{ email: string; password: string }>({
    mode: "onChange",
  });
  const { email } = method.getValues();
  const { password } = method.getValues();
  const { loginMutation, error, loading } = useLogin(email, password);

  const onSubmit = () => {
    if (!loading) {
      loginMutation({
        variables: {
          loginInput: {
            email,
            password,
          },
        },
      });
    }
  };

  const handleSidebar = () => {
    sidebarVar(!onSidebar);
  };
  useOutsideClick(ref, () => sidebarVar(false));

  return (
    <aside
      ref={ref}
      className={`fixed h-screen w-80 sm:w-400 bg-light flex flex-col z-50  transform ease-out duration-500 ${
        onSidebar ? "top-0 right-0" : "-right-400"
      }`}
    >
      <SidebarBox
        handleSidebar={handleSidebar}
        name={data?.me.name}
        email={data?.me.email}
      />
      {!data?.me.id ? (
        <FormProvider {...method}>
          <SideLoginForm onSubmit={onSubmit} error={error} loading={loading} />
        </FormProvider>
      ) : (
        <>
          {location.pathname === "/agency" ||
          location.pathname === "/agency/create-room" ||
          location.pathname === "/agency/profile/:id" ||
          location.pathname === "/agency/profile/:id" ? (
            <SidebarAgencyNav />
          ) : (
            <SidebarUserNav isAgency={data.me.isAgency} />
          )}
          <div className={"flex flex-1 justify-center items-end"}>
            <Button
              onClick={logout}
              className={
                "border border-gray-300 p-5 w-full font-bold text-gray-500 hover:bg-gray-200"
              }
              label={"로그아웃"}
            />
          </div>
        </>
      )}
    </aside>
  );
};

export default Sidebar;
