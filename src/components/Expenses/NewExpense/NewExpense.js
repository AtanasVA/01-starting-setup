import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const onNewExpense = (expenseObj) => {
    const newExpense = {
      ...expenseObj,
      id: Math.random().toString(),
    };
    props.onNewExpense(newExpense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onNewExpense={onNewExpense} />
    </div>
  );
};

export default NewExpense;
