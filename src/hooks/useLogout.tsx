import React from "react";
import { useHistory } from "react-router";
import { authTokenVar, isLoggedInVar, sidebarVar } from "../apollo";

export const useLogout = () => {
  const history = useHistory();
  const logout = () => {
    localStorage.clear();
    authTokenVar("");
    isLoggedInVar(false);
    sidebarVar(false);
    history.push("/room");
  };
  return logout;
};
