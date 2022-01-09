import React,{useState} from 'react'
import { ExpenseForm } from './ExpenseForm'
import './NewExpense.css'
export const NewExpense = (props) => {
    const saveExpenseDataHandler = (expenseData) =>{
        const saveData ={
            ...expenseData,
            id: Math.random().toString()
        }
        props.onAddData(saveData);
        setEdit(false);
    }
    const [edit,setEdit]=useState(false);
    const startHandler =() =>{
        setEdit(true);
    }
    const endHandler =() =>{
        setEdit(false);
    }
    return (
        <div className='new-expense'>
            {!edit && 
            <button onClick={startHandler}>Add New Expense</button>}
            {edit &&
            <ExpenseForm onCancel={endHandler} onSaveExpenseData={saveExpenseDataHandler} />}
        </div>
    )
}
