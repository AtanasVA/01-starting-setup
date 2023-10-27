import "./ChartBar.css";

export type ChartBarProps = {
  label: string;
  value: number;
  maxValue: number;
};

const ChartBar = ({ label, value, maxValue }: ChartBarProps) => {
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
