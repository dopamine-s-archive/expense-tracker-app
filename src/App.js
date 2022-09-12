import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { MOCK_EXPENSES } from './user-data';

export default function App() {
  const [expenses, setExpenses] = useState(MOCK_EXPENSES);

  const addExpenseHandler = expense => {
    console.log('in App.js', expense);

    setExpenses((prevExpenses) => {
      return  [expense,...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}
