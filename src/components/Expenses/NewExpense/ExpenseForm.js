import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onNewExpense }) => {
  const [titleField, updateTitleField] = useState("");
  const [amountField, updateAmountField] = useState("");
  const [dateField, updateDateField] = useState("");

  const [newExpenseField, updateNewExpenseField] = useState(false);

  const getTitleInput = (event) => {
    updateTitleField(event.target.value);
  };

  const getAmountInput = (event) => {
    updateAmountField(event.target.value);
  };

  const getDateInput = (event) => {
    updateDateField(event.target.value);
  };

  const sumbitHandler = (event) => {
    event.preventDefault();
    const inputExpense = {
      title: titleField,
      amount: amountField,
      date: new Date(dateField),
    };

    onNewExpense(inputExpense);
    updateTitleField("");
    updateAmountField("");
    updateDateField("");
    updateNewExpenseField(false);
  };

  const expenseFieldDisplay = () => {
    newExpenseField
      ? updateNewExpenseField(false)
      : updateNewExpenseField(true);
  };

  if (newExpenseField) {
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
          <button onClick={expenseFieldDisplay}>Hide</button>
        </div>
      </form>
    );
  }

  return <button onClick={expenseFieldDisplay}>Add new Expense</button>;
};

export default ExpenseForm;
