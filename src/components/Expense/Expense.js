import React,{useState} from 'react'
import './Expense.css'
import ExpenseItem from './ExpenseItem'
import { Card } from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpenseList from './ExpenseList'
export const Expense = props => {
    const [filterYear,setFilterYear] = useState ("2022");
    const filterChangeHandler = yearChange => {
        setFilterYear(yearChange);
        
    }
    const filterFun = props.expenses.filter(expense =>{
            return expense.date.getFullYear().toString()===filterYear;
    });
    return (
        
        <Card className='expenses'>
            <ExpensesFilter selected={filterYear} onFilterChange={filterChangeHandler}/>
            <ExpenseList expenses={filterFun} />
            
        </Card>
    )
}
