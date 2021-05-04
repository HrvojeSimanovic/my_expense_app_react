import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseItem from "../Expeneses/ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [year, setYear] = useState("2021");

  console.log(year);

  const onSelectedYearHandler = (year) => {
    setYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter defYear={year} onSelectedYear={onSelectedYearHandler} />
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
