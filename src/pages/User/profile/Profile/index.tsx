import { gql } from "@apollo/client";
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import { UserProfileTemplate } from "../../../../components";
import {  useMeLazy } from "../../../../hooks/useMe";

const Profile: React.FC = () => {
  const { data, meQuery } = useMeLazy();

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
          logout={console.log}
        />
      )}
    </>
  );
};

export default Profile;
