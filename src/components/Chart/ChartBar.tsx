import React from "react";
import "./ChartBar.css";

type chartFields = {
  label: string;
  maxValue: number;
  value: number;
};

const ChartBar = (props: chartFields) => {
  let fillAmount = "0%";
  if (props.maxValue > 0) {
    fillAmount = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: fillAmount }}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
