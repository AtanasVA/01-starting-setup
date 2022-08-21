import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  console.log(props);
  const expensesData = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  console.log(props.expensesData);
  for (const expense of props.expensesData) {
    const expenseMonth = expense.date.getMonth();
    expensesData[expenseMonth].value += expense.amount;
  }
  return (
    <div>
      <Chart dataValue={expensesData} />
    </div>
  );
};

export default ExpensesChart;
