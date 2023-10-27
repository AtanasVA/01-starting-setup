import "./Chart.css";
import ChartBar from "./ChartBar";

type SingleExpense = { label: string; value: number };

type BarData = SingleExpense[];

type ChartProps = {
  dataValue: BarData;
};

const Chart = ({ dataValue }: ChartProps) => {
  const numValues = dataValue.map((expense: SingleExpense) => expense.value);
  const totalMax = Math.max(...numValues);
  return (
    <div className="chart">
      {dataValue.map((expense: SingleExpense) => {
        return (
          <ChartBar
            key={expense.label}
            label={expense.label}
            value={expense.value}
            maxValue={totalMax}
          />
        );
      })}
    </div>
  );
};

export default Chart;
