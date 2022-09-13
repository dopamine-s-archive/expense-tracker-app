import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesChart from '../ExpensesChart/ExpensesChart';
import Card from '../UI/Card';
import './Expenses.css';

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('ALL');

  const yearFilterChangeHandler = selectedYearValue => {
    setFilteredYear(selectedYearValue);
  };

  const filteredExpenses = filteredYear !== 'ALL' ?
  props.expenses.filter((expense) => expense.date.getFullYear().toString() === filteredYear) : props.expenses;

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeYearFilter={yearFilterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList filteredExpenses={filteredExpenses}/>
      </Card>
    </div>
  );
}
