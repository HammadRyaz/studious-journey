import React from 'react'

const Data = () => {
    return (
        <>
            <div className="ticks"></div>
            <section id="spacer"></section>
            <section id='bottom'>
                <h1>Expense Data</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Cost</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Laptop</td>
                            <td>200</td>
                            <td><button className='Del-button'>Delete</button></td>
                        </tr>
                        <tr>
                            <td>Laptop</td>
                            <td>200</td>
                            <td><button className='Del-button'>Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </>
    )
}

export default Data