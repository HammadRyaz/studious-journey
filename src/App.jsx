import { useState } from "react";
import Die from "./Die";
import { nanoid } from "nanoid";
import ReactConfetti from "react-confetti";

export default function App() {
  const [dice, setDice] = useState(() => generateRandomDies());
  function generateRandomDies() {
    const newDies = new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
    return newDies;
  }
  function rollDice() {
    if (!gameWon) {
      setDice(prev =>
        prev.map(d =>
          d.isHeld
            ? d
            : { ...d, value: Math.ceil(Math.random() * 6) }
        )
      )
    } else {
      setDice(generateRandomDies())
    }
  }

  function hold(id) {
    setDice(prev =>
      prev.map((d) =>
        id === d.id ? { ...d, isHeld: !d.isHeld } : d
      )
    )
  }

  const gameWon = dice.every(die => die.isHeld) &&
    dice.every(die => die.value === dice[0].value)


  const diceElement = dice.map((d) => (
    <Die
      key={d.id}
      dice={d}
      hold={hold}
    />
  ));


  return (
    <>
      {gameWon && <ReactConfetti
        numberOfPieces={300}
        recycle={false} ravity={0.2}
        initialVelocityY={10} />}
      <main>
        <h1 className="title">Tenzies</h1>
        <p className="instructions">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="dice-container">{diceElement}</div>
        <button onClick={rollDice} className="roll-dice">
          {gameWon ? "New Game" : "Roll"}
        </button>
      </main></>
  );
}
