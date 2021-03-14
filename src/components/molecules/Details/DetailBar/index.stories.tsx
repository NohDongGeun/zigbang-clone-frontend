import { Meta } from "@storybook/react";
import React from "react";
import DetailBar from ".";
import {
  boolean,
  text,
  withKnobs,
  radios,
  number,
} from "@storybook/addon-knobs";

export default {
  title: "Molecules/Detailbar",
  component: DetailBar,
  decorators: [withKnobs],
} as Meta;

const test = [{ id: 1, text: "asd" }];
export const detailBar: React.FC = () => {
  return (
    <article className={"w-full sm:w-400 flex flex-col"}>
      <DetailBar label={text("label", "매물 정보")}>
        {test.map((e, i) => (
          <div key={i}>{e.text}</div>
        ))}
      </DetailBar>
    </article>
  );
};

export const subLabelBar: React.FC = () => {
  return (
    <article className={"w-full sm:w-400 flex flex-col"}>
      <DetailBar
        label={text("label", "관리비 포함 항목")}
        subLabel={text("subLabel", "관리비: 7만원 (전기,가스 별도)")}
      >
        {test.map((e, i) => (
          <div key={i}>{e.text}</div>
        ))}
      </DetailBar>
    </article>
  );
};
// export const subLabelBar: React.FC = () => {
//   return (
//     <article>
//       <DetailBar
//         label={text("label", "관리비 포함 항목")}
//         subLabel={text("subLabel", "관리비: 7만원 (전기,가스 별도)")}
//       >
//         <div className={"w-12"}></div>
//       </DetailBar>
//     </article>
//   );
// };
