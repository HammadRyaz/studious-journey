import React from 'react'
import Header from './Header';

const App = () => {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"]
  const [fvrtThings, setFvrtThings] = React.useState(["💦🌹"]);
  const ingredientsListItem = ingredients.map(i => <li key={i}>{i}</li>)
  function handleSubmit(event) {
    event.preventDefault();
    console.log("clicked")
    const formData = new FormData(event.currentTarget)
    const newIngredients = formData.get("ingredient")
    ingredients.push(newIngredients)
    console.log(ingredients)
  }
  const allFavoriteThings = ["😺", "💡🫖", "🔥🧤", "🟤🎁",
    "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]

  const displayFvrtThings = fvrtThings.map((f) => <li key={f}>{f}</li>)

  function handFvrtThings(e) {
    e.preventDefault()
    setFvrtThings(prevThings => {
      if (prevThings.length <= allFavoriteThings.length) {
        console.log(prevThings.length)
        return [...prevThings, allFavoriteThings[prevThings.length - 1]]
      } else {
        console.log("No more things to add")
        return prevThings
      }
    })
  }
  return (
    <>
      <Header />
      <main>
        <form className="add-ingredient-form"
          aria-label='Add Ingredients'
        // onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="e.g. oregano"
            aria-label="Add ingredient"
            name='ingredient'
          />
          <button>Add ingredient</button>
          <button onClick={handFvrtThings} >Add Fvrt Things</button>
        </form>
        <ul className='py-2'>
          {ingredientsListItem}
          {displayFvrtThings}
        </ul>
      </main>
    </>
  )
}

export default App