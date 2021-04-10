import { Meta } from "@storybook/react";
import { KakaoRoadview } from "../..";

export default {
  title: "Atoms/KakaoRoadview",
  component: KakaoRoadview,
} as Meta;

export const roadview: React.FC = () => {
  return (
    <KakaoRoadview className={"h-455 w-400"} lon={126.734086} lat={37.413294} />
  );
};
