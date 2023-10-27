import { ChangeEvent, useState } from "react";
import "./ExpenseForm.css";

export type ExpenseObj = { title: string; amount: number; date: Date };

type ExpenseFormProps = {
  onNewExpense: (obj: ExpenseObj) => void;
  onHide: () => void;
};

const ExpenseForm = ({ onNewExpense, onHide }: ExpenseFormProps) => {
  const [titleField, updateTitleField] = useState("");
  const [amountField, updateAmountField] = useState<number>();
  const [dateField, updateDateField] = useState("");

  const getTitleInput = (event: ChangeEvent<HTMLInputElement>) => {
    updateTitleField(event.target.value);
  };

  const getAmountInput = (event: ChangeEvent<HTMLInputElement>) => {
    updateAmountField(Number(event.target.value));
  };

  const getDateInput = (event: ChangeEvent<HTMLInputElement>) => {
    updateDateField(event.target.value);
  };

  const sumbitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputExpense = {
      title: titleField,
      amount: Number(amountField),
      date: new Date(dateField),
    };

    onNewExpense(inputExpense);
    updateTitleField("");
    updateAmountField(0);
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
