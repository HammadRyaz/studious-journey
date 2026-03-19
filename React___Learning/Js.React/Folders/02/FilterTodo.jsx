import React from 'react'

const FilterTodo = ({FILTERS , count , setFilter }) => {
    return (
        <div className="Filters-btn mt-2 flex w-sm justify-around">
            {FILTERS.map((f) => (
                <button
                    key={f}
                    className="btn mx-2 font-black"
                    onClick={() => setFilter(f)}
                >
                    {f.charAt(0).toUpperCase() + f.slice(1)}({count(f)})
                </button>
            ))}
        </div>
    )
}

export default FilterTodo