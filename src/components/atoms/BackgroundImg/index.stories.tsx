import { Meta } from "@storybook/react";
import React from "react";
import BackgroundImg from "./index";
import { text, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "Atoms/BackgroundImg",
  component: BackgroundImg,
  decorators: [withKnobs],
} as Meta;

export const basicBackgroundImg: React.FC = () => {
  return (
    <div className={"w-400"}>
      <BackgroundImg
        label={text("label", "에어컨")}
        src={"https://s.zigbang.com/zuix/ic_aircon_dim_cutline.png"}
      />
    </div>
  );
};

export const fiveItems: React.FC = () => {
  return (
    <div className={"sm:w-400 w-full flex flex-row flex-wrap"}>
      <BackgroundImg
        label={text("label", "에어컨")}
        src={"https://s.zigbang.com/zuix/ic_aircon_dim_cutline.png"}
      />
      <BackgroundImg
        label={text("label", "냉장고")}
        src={"https://s.zigbang.com/zuix/ic_refrigerator_dim_cutline.png"}
      />
      <BackgroundImg
        label={text("label", "책상")}
        src={text(
          "src",
          "https://s.zigbang.com/zuix/ic_refrigerator_dim_cutline.png"
        )}
      />
      <BackgroundImg
        label={text("label", "에어컨")}
        src={text(
          "src",
          "https://s.zigbang.com/zuix/ic_refrigerator_dim_cutline.png"
        )}
      />
      <BackgroundImg
        label={text("label", "에어컨")}
        src={text(
          "src",
          "https://s.zigbang.com/zuix/ic_refrigerator_dim_cutline.png"
        )}
      />
    </div>
  );
};
