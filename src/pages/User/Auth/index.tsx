import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { AuthTemplate } from "../../../components";

const Auth: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [phoneNum, setPhoneNum] = useState<number>();

  const method = useForm({
    mode: "onChange",
  });
  const { phone } = method.getValues();
  //휴대폰번호로 코드보내기
  const onClick = () => {
    setIsChecked(true);
    console.log("asd");
  };
  //코드 검사하기
  const onSubmit = () => {
    //todo:apollo submit 컴플리트 시 ROOM으로 보내주기
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
        label1={isChecked ? `${phoneNum}로 전송된` : "휴대폰 번호를 입력하시면"}
        label2={
          isChecked
            ? "4자리 숫자를 입력해주세요."
            : "문의 시 더욱 편리하게 연결됩니다."
        }
      />
    </FormProvider>
  );
};

export default Auth;
