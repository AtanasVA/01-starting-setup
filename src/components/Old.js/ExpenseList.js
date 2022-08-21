import React from "react";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  if (props.expenseYears.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.expenseYears.map(({ title, amount, date, id }) => (
        <ExpenseItem key={id} title={title} amount={amount} date={date} />
      ))}
    </ul>
  );
};

export default ExpenseList;
