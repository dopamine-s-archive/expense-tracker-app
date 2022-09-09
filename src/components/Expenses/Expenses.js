import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2022');

  const yearFilterChangeHandler = selectedYearValue => {
    setFilteredYear(selectedYearValue);
  };

  console.log('in Expenses.js - yearValue', filteredYear);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeYearFilter={yearFilterChangeHandler} />
      {
        props.expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )
        )
      }
      </Card>
    </div>
  );
}
