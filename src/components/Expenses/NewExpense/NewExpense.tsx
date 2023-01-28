import React, { useState } from "react";
import { expenseData } from "../../../App";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({
  onNewExpenseRender,
}: {
  onNewExpenseRender: (arg: expenseData) => void;
}) => {
  const [displayExpenseForm, updateDisplayExpenseForm] =
    useState<boolean>(false);
  const onNewExpense = (expenseObj: expenseData) => {
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
