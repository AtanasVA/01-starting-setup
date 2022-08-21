import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const showFilteredByYear = (selYear) => {
    setFilteredYear(selYear);
  };

  const expenseYears = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpenseFilter
          selectedYear={filteredYear}
          showFilteredByYear={showFilteredByYear}
        />
        <ExpensesChart expensesData={expenseYears} />
        <ExpenseList expenseYears={expenseYears} />
      </Card>
    </li>
  );
}

export default Expenses;
