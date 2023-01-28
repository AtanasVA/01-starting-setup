import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

type DataValues = {
  dataValues: {
    label: string;
    value: number;
  }[];
};

const Chart = ({ dataValues }: DataValues) => {
  const numValues = dataValues.map((expense) => expense.value);
  const totalMax = Math.max(...numValues);
  return (
    <div className="chart">
      {dataValues.map((dataValue) => {
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
