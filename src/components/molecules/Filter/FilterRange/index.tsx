import React, { useRef } from "react";
import Slider, { createSliderWithTooltip } from "rc-slider";
import "./styles.css";
import "rc-slider/assets/index.css";

const Range = createSliderWithTooltip(Slider.Range);
interface IFilterRange {
  labels: string[];
  onChange: (value: number[]) => void;
}

const FilterRange: React.FC<IFilterRange> = ({ labels, onChange }) => {
  return (
    <div
      className={
        "w-full sm:w-400 p-3 flex h-18 pb-8 items-center justify-center"
      }
    >
      <Range
        className={"w-full"}
        min={0}
        max={99.9}
        defaultValue={[0, 99.9]}
        marks={{
          0: <span className={"sliderDot"}>{labels[0]}</span>,
          33.3: <span className={"sliderDot"}>{labels[1]}</span>,
          66.6: <span className={"sliderDot"}>{labels[2]}</span>,
          99.9: <span className={"sliderDot"}>{labels[3]}</span>,
        }}
        step={5.55}
        allowCross={false}
        tipProps={{ placement: "top" }}
        onChange={onChange}
        dotStyle={{ display: "none" }}
        railStyle={{ backgroundColor: "rgb(187, 187, 187)" }}
        trackStyle={[
          { backgroundColor: "rgb(68, 68, 68)" },
          { backgroundColor: "rgb(68, 68, 68)" },
        ]}
        handleStyle={[
          {
            width: "22px",
            height: "22px",
            marginTop: -9,
            borderRadius: "22px",
            border: "1px solid rgb(237, 237, 237)",
            outline: "none",
            boxShadow: "rgba(157, 157, 157, 0.2) 0px 2px 5px ",
            backgroundColor: "#fff",
            zIndex: 10,
          },
        ]}
      />
    </div>
  );
};

export default React.memo(FilterRange);
