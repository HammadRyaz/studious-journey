import React from 'react'

const Container = ({ children, name = "Todo App" }) => {
    return (
        <div className="App mx-auto mt-2 flex h-fit min-h-64 w-full flex-col items-center justify-center rounded-t-3xl rounded-b-3xl border-y-3 shadow md:w-2/3">
            <h3 className="py-2 text-center text-2xl font-black"> {name} </h3>
            {children}
        </div>
    )
}

export default Container