import React from "react";
import { RegisterBox, RegisterLabel, RegisterTextArea } from "../../..";

interface IRoomText {
  currentTitleNum: number;
  currentContentNum: number;
  onChangeTextarea: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  title: string;
  content: string;
  titleError: boolean;
  contentError: boolean;
}

const RoomTexts: React.FC<IRoomText> = ({
  currentTitleNum,
  currentContentNum,
  onChangeTextarea,
  title,
  content,
  titleError,
  contentError,
}) => {
  return (
    <RegisterBox label={"설명"}>
      <RegisterLabel label={"제목"}>
        <RegisterTextArea
          label={`${currentTitleNum}자 입력 / 최소 7자~최대32자`}
          placeholder={"매물 정보를 간단히 입력하세요."}
          isError={titleError}
          size={"basic"}
          onChange={onChangeTextarea}
          name={"title"}
          value={title}
        />
      </RegisterLabel>
      <RegisterLabel label={"상세설명"}>
        <RegisterTextArea
          label={`${currentContentNum}자 입력 / 최소 50자`}
          placeholder={"매물 구조와 특징을 자세히 입력하세요."}
          isError={contentError}
          size={"big"}
          onChange={onChangeTextarea}
          name={"content"}
          value={content}
        />
      </RegisterLabel>
    </RegisterBox>
  );
};

export default RoomTexts;
