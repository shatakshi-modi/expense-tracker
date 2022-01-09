import { ExpenseDate } from './ExpenseDate';
import { Card } from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = props => {
   const dateProp = new Date (props.date)
  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={dateProp}/>
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;