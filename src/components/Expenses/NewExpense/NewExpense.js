import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onNewExpenseRender }) => {
  const onNewExpense = (expenseObj) => {
    const newExpense = {
      ...expenseObj,
      id: Math.random().toString(),
    };
    onNewExpenseRender(newExpense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onNewExpense={onNewExpense} />
    </div>
  );
};

export default NewExpense;
