import React from "react";
import "./ChartBar.css";

type ChartFields = {
  label: string;
  maxValue: number;
  value: number;
};

const ChartBar = ({ maxValue, value, label }: ChartFields) => {
  let fillAmount = "0%";
  if (maxValue > 0) {
    fillAmount = Math.round((value / maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: fillAmount }}></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
