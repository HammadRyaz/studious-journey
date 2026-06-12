import React from 'react'
import Header from './Header';

const App = () => {
  const [ingredients, setIngredients] = React.useState(["Chicken", "Oregano", "Tomatoes"])
  const ingredientsListItem = ingredients.map(i => <li key={i}>{i}</li>)
  function handleSubmit(event) {
    event.preventDefault();
    console.log("clicked")
    const formData = new FormData(event.currentTarget)
    const newIngredients = formData.get("ingredient")
    setIngredients(prev => [...prev, newIngredients])
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
            name='ingredient'
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