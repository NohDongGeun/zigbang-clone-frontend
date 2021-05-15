import { gql } from "@apollo/client";
import React, { useEffect, useRef, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { authTokenVar, isLoggedInVar } from "../../../../apollo";
import { UserProfileTemplate } from "../../../../components";
import { useLogout } from "../../../../hooks/useLogout";
import { useMeLazy } from "../../../../hooks/useMe";

const Profile: React.FC = () => {
  const history = useHistory();
  const { data, meQuery } = useMeLazy();
  const logout = useLogout();
  useEffect(() => {
    meQuery();
  }, []);

  return (
    <>
      {data && (
        <UserProfileTemplate
          email={data.me.email}
          name={data.me.name}
          phone={data.me.phone ? data.me.phone : null}
          logout={logout}
        />
      )}
    </>
  );
};

export default Profile;
