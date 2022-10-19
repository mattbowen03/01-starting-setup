import { useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");

  const filterChange = (year) => {
    setFilterYear(year);
  };

  const filteredView = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filterYear
  );

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter onFilterChange={filterChange} filterYear={filterYear} />
        <ExpensesChart expenses={filteredView} />
        <ExpensesList filteredView={filteredView} />
      </Card>
    </div>
  );
};

export default Expenses;
