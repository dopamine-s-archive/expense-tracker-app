import ExpenseItem from './ExpenseItem';
import { expenses } from '../../user-data';
import Card from '../UI/Card';
import './Expenses.css';

export default function Expenses() {
  return (
    <Card className='expenses'>
    {
      expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      )
      )
    }
    </Card>
  );
}
