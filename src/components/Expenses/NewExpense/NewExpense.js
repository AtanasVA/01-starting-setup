import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onNewExpenseRender }) => {
  const [displayExpenseForm, updateDisplayExpenseForm] = useState(false);
  const onNewExpense = (expenseObj) => {
    const newExpense = {
      ...expenseObj,
      id: Math.random().toString(),
    };
    onNewExpenseRender(newExpense);
  };

  const onClick = () => {
    displayExpenseForm
      ? updateDisplayExpenseForm(false)
      : updateDisplayExpenseForm(true);
  };

  return (
    <div className="new-expense">
      {!displayExpenseForm && (
        <button onClick={onClick}>Add New Expense</button>
      )}
      {displayExpenseForm && (
        <ExpenseForm onNewExpense={onNewExpense} onHide={onClick} />
      )}
    </div>
  );
};

export default NewExpense;
