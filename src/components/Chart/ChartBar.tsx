import "./ChartBar.css";

export type ChartProps = {
  label: string;
  value: number;
  maxValue: number;
};

const ChartBar = (props: ChartProps) => {
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
