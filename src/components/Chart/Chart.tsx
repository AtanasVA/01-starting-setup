import "./Chart.css";
import ChartBar from "./ChartBar";
// import { ChartProps } from "./ChartBar";

type BarData = { label: string; value: number }[];

type MonthBars = {
  dataValue: BarData;
};

const Chart = (props: MonthBars) => {
  const numValues = props.dataValue.map((expense: any) => expense.value);
  const totalMax = Math.max(...numValues);
  return (
    <div className="chart">
      {props.dataValue.map((dataValue: any) => {
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
