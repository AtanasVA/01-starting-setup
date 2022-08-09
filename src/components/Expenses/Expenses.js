import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const showFilteredByYear = (selYear) => {
    console.log(`Show me expenses for ${selYear}`);
    setFilteredYear(selYear);
    const expenseYears = props.item.filter((expense) => {
      const yearOfPurchase = expense.date.getYear() + 1900;

      return yearOfPurchase == selYear;
    });

    console.log(expenseYears);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selectedYear={filteredYear}
          showFilteredByYear={showFilteredByYear}
        />
        {props.item.map(({ title, amount, date, id }) => (
          <ExpenseItem key={id} title={title} amount={amount} date={date} />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
