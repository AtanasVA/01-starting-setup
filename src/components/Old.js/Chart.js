import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const numValues = props.dataValue.map((expense) => expense.value);
  const totalMax = Math.max(...numValues);
  return (
    <div className="chart">
      {props.dataValue.map((dataValue) => {
        return (
          <ChartBar
            key={dataValue.label}
            label={dataValue.label}
            value={dataValue.value}
            maxValue={totalMax}
          />
        );
      })}
    </div>
  );
};

export default Chart;
