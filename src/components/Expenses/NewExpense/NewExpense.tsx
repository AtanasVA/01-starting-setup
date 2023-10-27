import React, { useState } from "react";
import ExpenseForm, { ExpenseObj } from "./ExpenseForm";
import "./NewExpense.css";
import { Expense } from "../Expenses";

type PropExpense = (newExpense: Expense) => void;

type NewExpenseProps = {
  onNewExpenseRender: PropExpense;
};

const NewExpense = ({ onNewExpenseRender }: NewExpenseProps) => {
  const [displayExpenseForm, updateDisplayExpenseForm] = useState(false);
  const onNewExpense = (expenseObj: ExpenseObj) => {
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
