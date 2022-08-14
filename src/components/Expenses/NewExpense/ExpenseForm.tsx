import { ChangeEvent, useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [titleField, updateTitleField] = useState("");
  const [amountField, updateAmountField] = useState("");
  const [dateField, updateDateField] = useState("");
  //   const [inputFields, updateInputFields] = useState({
  //     titleField: "",
  //     amountField: "",
  //     dateField: "",
  //   });

  const getTitleInput = (event: ChangeEvent<HTMLInputElement>) => {
    updateTitleField(event.target.value);
    // updateInputFields({
    //   ...inputFields,
    //   titleField: event.target.value,
    // });
    // updateInputFields((inputFields) => {
    //   return { ...inputFields, titleField: event.target.value }; // <- if you need to keep the original state of all elements
    // });
  };

  const getAmountInput = (event: ChangeEvent<HTMLInputElement>) => {
    updateAmountField(event.target.value);
    // updateInputFields({
    //   ...inputFields,
    //   amountField: event.target.value,
    // });
  };

  const getDateInput = (event: ChangeEvent<HTMLInputElement>) => {
    updateDateField(event.target.value);
    // updateInputFields({
    //   ...inputFields,
    //   dateField: event.target.value,
    // });
  };

  const sumbitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputExpense = {
      title: titleField,
      amount: amountField,
      date: new Date(dateField),
    };
    console.log(inputExpense);

    updateTitleField("");
    updateAmountField("");
    updateDateField("");
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
      </div>
    </form>
  );
};

export default ExpenseForm;