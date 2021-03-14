import React from "react";
import { BackgroundImg, Text } from "../../..";
import { IDetailOption } from "../../../../interfaces/Option";
import DetailBar from "../DetailBar";

interface IDetailExpenses {
  /**
   * 총 관리비
   */
  expense?: number;

  /**
   * 관리비에 포함된 항목들
   */
  expenseOptions?: IDetailOption[];
}

const DetailExpenses: React.FC<IDetailExpenses> = ({
  expense,
  expenseOptions,
}) => {
  return (
    <DetailBar label={"관리비 포함 항목"} subLabel={`관리비 : ${expense}만원`}>
      <div className={"flex flex-1 flex-row flex-wrap"}>
        {expenseOptions ? (
          expenseOptions.map((expense, i) => {
            return (
              <BackgroundImg label={expense.label} src={expense.src} key={i} />
            );
          })
        ) : (
          <Text
            className={
              "w-full px-3 py-4 text-gray-400 justify-center items-center text-center"
            }
            label={"포함된 관리비가 없습니다"}
          />
        )}
      </div>
    </DetailBar>
  );
};

export default DetailExpenses;
