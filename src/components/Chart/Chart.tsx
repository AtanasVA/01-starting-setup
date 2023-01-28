import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

type labelFields = {
  label: string;
  value: number;
};

const Chart = (props: { dataValue: labelFields[] }) => {
  const numValues = props.dataValue.map(
    (expense: labelFields) => expense.value
  );
  const totalMax = Math.max(...numValues);
  return (
    <div className="chart">
      {props.dataValue.map((dataValue: labelFields) => {
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
