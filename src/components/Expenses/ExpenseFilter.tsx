import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = ({
  showFilteredByYear,
  selectedYear,
}: {
  showFilteredByYear: (arg: string) => void;
  selectedYear: string;
}) => {
  const onFilterChange = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedYear = target.value;
    showFilteredByYear(selectedYear);
  };
  return (
    <div className="expense-filter">
      <div className="expense-filter__control">
        <label>Filter by year</label>
        <select onChange={onFilterChange} value={selectedYear}>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
