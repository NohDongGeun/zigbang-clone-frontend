import { gql } from "@apollo/client";
import React, { useEffect, useRef, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { authTokenVar, isLoggedInVar } from "../../../../apollo";
import { UserProfileTemplate } from "../../../../components";
import { useMeLazy } from "../../../../hooks/useMe";

const Profile: React.FC = () => {
  const history = useHistory();
  const { data, meQuery } = useMeLazy();

  useEffect(() => {
    meQuery();
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    authTokenVar("");
    isLoggedInVar(false);
    history.push("/room/");
  };

  return (
    <>
      {data && (
        <UserProfileTemplate
          email={data.me.email}
          name={data.me.name}
          phone={data.me.phone ? data.me.phone : null}
          logout={handleLogout}
        />
      )}
    </>
  );
};

export default Profile;
