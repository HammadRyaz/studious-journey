import React from 'react'
import { useParams } from 'react-router-dom'

const Tracker = () => {


    return (
        <>
            <h1>Expense Tracker</h1>
            <div>
                <input type="text" className='input' placeholder='Your Item Name..' />
                <button className='button'> Add Item</button>
            </div>


        </>
    )
}

export default Tracker