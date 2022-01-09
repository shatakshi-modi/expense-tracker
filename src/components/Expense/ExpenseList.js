import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpenseList.css'

const ExpenseList = (props) => {
    if(props.expenses.length===0){
        return (
            <h1 className='expenses-list__fallback'>No Expense Found</h1>
        )
    }
    return (
        <ul className='expenses-list'>
            {props.expenses.map((expense) => (
                <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date ={expense.date} />
            ))}
        </ul>
    )
}

export default ExpenseList
