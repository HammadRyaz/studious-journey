import React from 'react'
import Header from './Header';

const App = () => {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"]
  const ingredientsListItem = ingredients.map(i => <li>{i}</li>)

  return (
    <>
      <Header />
      <main>
        <form className="add-ingredient-form">
          <input
            type="text"
            placeholder="e.g. oregano"
            aria-label="Add ingredient"
          />
          <button>Add ingredient</button>
        </form>
        <ul className='py-2'>
          {ingredientsListItem}
        </ul>
      </main>
    </>
  )
}

export default App