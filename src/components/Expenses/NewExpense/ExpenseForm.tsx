import React, { ChangeEvent, FormEvent, useState } from "react";
import { expenseData } from "../../../App";
import "./ExpenseForm.css";

const ExpenseForm = ({
  onNewExpense,
  onHide,
}: {
  onNewExpense: (arg: expenseData) => void;
  onHide: () => void;
}) => {
  const [titleField, updateTitleField] = useState<string>("");
  const [amountField, updateAmountField] = useState<string>("");
  const [dateField, updateDateField] = useState<string>("");

  const getTitleInput = (event: ChangeEvent<HTMLInputElement>) => {
    updateTitleField(event.target.value);
  };

  const getAmountInput = (event: ChangeEvent<HTMLInputElement>) => {
    updateAmountField(event.target.value);
  };

  const getDateInput = (event: ChangeEvent<HTMLInputElement>) => {
    updateDateField(event.target.value);
  };

  const sumbitHandler = (event: FormEvent) => {
    event.preventDefault();
    const inputExpense = {
      title: titleField,
      amount: amountField as unknown as number,
      date: new Date(dateField),
    };

    onNewExpense(inputExpense);
    updateTitleField("");
    updateAmountField("");
    updateDateField("");
    onHide();
  };

  return (
    <form onSubmit={sumbitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={titleField} onChange={getTitleInput} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={amountField}
            min="0.01"
            step="0.01"
            onChange={getAmountInput}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={dateField}
            min="2019-01-01"
            max="2022-12-31"
            onChange={getDateInput}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Submit Expense</button>
        <button onClick={onHide}>Hide</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
