import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";
import { expenseData } from "../../App";

function Expenses(props: { item: expenseData[] }) {
  const [filteredYear, setFilteredYear] = useState<string>("2022");

  const showFilteredByYear = (selYear: string) => {
    setFilteredYear(selYear);
  };

  const expenseYears = props.item.filter((expense: expenseData) => {
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
