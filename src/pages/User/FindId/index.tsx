import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { AuthTemplate } from "../../../components";

const FindId: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [phoneNum, setPhoneNum] = useState<number>();
  const method = useForm({
    mode: "onChange",
  });
  const { phone } = method.getValues();
  const onClick = () => {
    setIsChecked(true);
    console.log("asd");
  };
  //코드 검사하기
  const onSubmit = () => {
    //todo:apollo submit 컴플리트 시 ROOM으로 보내주기
    console.log("asd");
    setPhoneNum(phone);
    setIsChecked(true);
    method.reset({ phone });
  };
  return (
    <FormProvider {...method}>
      <AuthTemplate
        onSubmit={onSubmit}
        onClick={onClick}
        isChecked={isChecked}
        label1={isChecked ? `${phoneNum}로 전송된` : "가입 시 등록한"}
        label2={
          isChecked
            ? "4자리 숫자를 입력해주세요."
            : "휴대폰 번호를 입력해 주세요."
        }
      />
    </FormProvider>
  );
};

export default FindId;
