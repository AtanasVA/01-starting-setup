import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
import { Expense } from "./Expenses";

type PropsType = { expenseYears: Expense[] };

const ExpenseList = (props: PropsType) => {
  if (props.expenseYears.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.expenseYears.map(({ title, amount, date, id }: Expense) => (
        <ExpenseItem key={id} title={title} amount={amount} date={date} />
      ))}
    </ul>
  );
};

export default ExpenseList;
