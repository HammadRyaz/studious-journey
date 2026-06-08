import React from 'react'
import Header from './Header';

const App = () => {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"]
  const ingredientsListItem = ingredients.map(i => <li>{i}</li>)
  function handleSubmit(event) {
    event.preventDefault();
    // const fromData = new FormData(event)

  }
  function handleClick(event) {
    console.log("currentTarget")
    console.log(event.currentTarget);
    console.log("Target")
    console.log(event.target);
  }
  return (
    <>
      <Header />
      <main>
        <form className="add-ingredient-form"
          aria-label='Add Ingredients'
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="e.g. oregano"
            aria-label="Add ingredient"
          />
          <button>Add ingredient</button>
          <button onClick={handleClick}> <span>Event</span></button>

        </form>
        <ul className='py-2'>
          {ingredientsListItem}
        </ul>
      </main>
    </>
  )
}

export default App