import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('ALL');

  const yearFilterChangeHandler = selectedYearValue => {
    setFilteredYear(selectedYearValue);
  };

  console.log('in Expenses.js - yearValue', filteredYear);
  console.log('in Expenses.js - props', props)

  const filteredExpenses = filteredYear !== 'ALL' ?
  props.expenses.filter((expense) => expense.date.getFullYear().toString() === filteredYear) : props.expenses;

  let expensesContent = <p>No expenses found.</p>

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeYearFilter={yearFilterChangeHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
}
