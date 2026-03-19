import React from 'react'

const DisplayTodo = ({ filter, visible, toggleTodo, deleteTodo }) => {
    return (
        <div className="py-2px-2 my-2 w-md text-xl">
            {visible.length > 0 ? (
                visible.map((t) => (
                    <div
                        key={t.id}
                        className="btn-outline my-1 flex justify-between p-2"
                    >
                        <input
                            type="checkbox"
                            className="mx-2 size-8 accent-black"
                            onChange={() => toggleTodo(t.id)}
                            checked={t.completed}
                        />
                        <span className={`w-full ${t.completed ? "line-through" : ""}`}>
                            {t.text.charAt(0).toUpperCase() + t.text.slice(1)}
                        </span>
                        <button
                            onClick={() => deleteTodo(t.id)}
                            className="btn size-10 bg-red-700 text-center text-sm font-black"
                        >
                            ✕
                        </button>
                    </div>
                ))
            ) : (
                <h1 className="py-10 text-center text-2xl text-neutral-600">
                    {filter.trim() === "all".trim()
                        ? "No tasks yet — add one above!"
                        : filter.trim() === "active".trim()
                            ? "No Active Task"
                            : "No Done Task"}
                </h1>
            )}
        </div>
    )
}

export default DisplayTodo