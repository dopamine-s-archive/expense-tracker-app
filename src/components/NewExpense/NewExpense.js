import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

export default function NewExpense(props) {
  const [isAddingExpense, setIsAddingExpense] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    console.log('in NewExpense.js - expenseData',expenseData);
    props.onAddExpense(expenseData);
  };

  const startAddingExpenseHandler = () => {
    setIsAddingExpense(true);
  };

  const stopAddingExpenseHandler = () => {
    setIsAddingExpense(false);
  };

  return <div className="new-expense">
    {
      !isAddingExpense && (
        <button
          onClick={startAddingExpenseHandler}
        >
          Add New Expense
        </button>
      )
    }
    {
      isAddingExpense && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelAddingExpense={stopAddingExpenseHandler}
        />
      )
    }
  </div>
};
