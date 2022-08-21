import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

export type Expense = {
  id: string;
  title: string;
  amount: number;
  date: Date;
};

type Property = {
  item: Expense[];
};

function Expenses(props: Property) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const showFilteredByYear = (selYear: string) => {
    setFilteredYear(selYear);
  };

  const expenseYears = props.item.filter((expense: Expense) => {
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
