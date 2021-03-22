import React from "react";
import { Text } from "../../..";
import DetailBar from "../DetailBar";

interface IDetailText {
  /**
   * 상세 설명 wysiwyg
   */
  wysiwyg: string;

  /**
   * 목록 이름
   */
  label: string;
}

const DetailText: React.FC<IDetailText> = ({ wysiwyg, label }) => {
  return (
    <DetailBar label={label}>
      <div className={"flex flex-1 px-3 py-4"}>
        <Text label={wysiwyg} className={"break-all"} />
      </div>
    </DetailBar>
  );
};

export default DetailText;
