import React , {useContext} from 'react';
import ExpenseItem from  './ExpenseItem';

import { AppContext } from '../context/AppContext';

export const ExpenseList = () => {
    const {expenses} = useContext(AppContext)
    
    return (
        <ul className='list-group'>
            {expenses.map( (expense) => {
               return <ExpenseItem
                 id={expense.id}
                 name={expense.name}
                 cost={expense.cost} />
            })}
        </ul>
    )
}
export default ExpenseList;