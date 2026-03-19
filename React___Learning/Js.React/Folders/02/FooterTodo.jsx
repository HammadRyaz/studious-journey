import React from 'react'

const FooterTodo = ({ todos, count, clearComplete }) => {
    return (
        <footer className="mt-auto flex w-full justify-between px-8 pt-8 pb-4 font-mono">
            <span>
                {count("active") > 1
                    ? `${count("active") + " tasks Left "}`
                    : `${count("active") + " task Left "}`}
            </span>
            {todos.some((t) => t.completed) && (
                <button onClick={clearComplete} className="btn">
                    CLear Complete
                </button>
            )}
        </footer>
    )
}

export default FooterTodo