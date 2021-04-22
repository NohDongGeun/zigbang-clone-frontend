import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import AgencyRegisterTemplate from "../../../components/templates/AgencyProfile";

const AgencyProfile: React.FC = () => {
  const method = useForm();
  useEffect(() => {
    const { setValue } = method;
    setValue("name", "노동근");
    setValue("agent", "부동산");
    setValue("address", "울산 광역시");
  }, []);

  const onChageImage = () => {};

  const onSubmit = () => {};
  return (
    <FormProvider {...method}>
      <AgencyRegisterTemplate
        src={"asd"}
        onChange={onChageImage}
        onSubmit={onSubmit}
      />
    </FormProvider>
  );
};

export default AgencyProfile;
