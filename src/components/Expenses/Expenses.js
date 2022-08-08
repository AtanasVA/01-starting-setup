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
  };
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selectedYear={filteredYear}
          showFilteredByYear={showFilteredByYear}
        />
        <ExpenseItem
          title={props.item[0].title}
          amount={props.item[0].amount}
          date={props.item[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.item[1].title}
          amount={props.item[1].amount}
          date={props.item[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.item[2].title}
          amount={props.item[2].amount}
          date={props.item[2].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
}

export default Expenses;
