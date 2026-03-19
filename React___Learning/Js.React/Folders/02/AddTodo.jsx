import React from 'react'

const AddTodo = ({ input, setInput, addTodo, setFilter }) => {
    return (
        <div className="add">
            <input
                className="input w-sm"
                value={input}
                onKeyDown={(e) => e.key === "Enter" && (addTodo(), setFilter("all"))}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder="What need to be done? "
            />
            <button className="btn mx-2 font-black" onClick={() => { addTodo(); setFilter("all") }}>
                +
            </button>
        </div>
    )
}

export default AddTodo