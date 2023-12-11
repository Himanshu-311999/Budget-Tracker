import React, {useState , useContext} from 'react'
import {v4 as uuidv4} from  'uuid';  //Package to generate random ID
import { AppContext } from '../context/AppContext'

const AddExpenseForm = () => {
    const { dispatch } = useContext(AppContext);


    const [name , setName] = useState('');
    const [cost , setCost] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();

        const expense = {
            id: uuidv4(),
            name : name, 
            cost: parseInt(cost),
        };

        dispatch( 
            {
                type: 'ADD_EXPENSE',
                payload: expense,
            }
        )
    }
    return (
        <form className='row' onSubmit={onSubmit} >
            <div className='col-sm'>
                <label for='name'>Name</label>
                <input 
                  required type="text"
                  className='form-control'
                  id='name'
                  value={name}
                  onChange={ (event) => setName(event.target.value)}
                />
            </div>

            <div className='col-sm'>
                <label for='cost'>Cost</label>
                <input
                  required type="text"
                  className='form-control'
                  id='cost'
                  value={cost}
                  onChange ={ (event) => setCost(event.target.value)}
                />
            </div>

            <div className='col-sm mt-4'>
                <button type='submit' className = 'btn btn-primary'>Save</button>
            </div>
            
        </form>
    )
}
export default AddExpenseForm