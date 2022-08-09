import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const showFilteredByYear = (selYear) => {
    setFilteredYear(selYear);
  };

  const expenseYears = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  let ifItemsExist = <p>No expenses found</p>;
  if (expenseYears.length > 0) {
    ifItemsExist = expenseYears.map(({ title, amount, date, id }) => (
      <ExpenseItem key={id} title={title} amount={amount} date={date} />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selectedYear={filteredYear}
          showFilteredByYear={showFilteredByYear}
        />
        {ifItemsExist}
      </Card>
    </div>
  );
}

export default Expenses;
