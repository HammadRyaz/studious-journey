import React from "react";
import { languages } from "./languages";
import clsx from "clsx";

const App = () => {
  const [currentWord, setCurrentWord] = React.useState("react");
  const [guessLetter, setGuessLetter] = React.useState([]);

  const wrongGuessCount = guessLetter.filter((letter) => !currentWord.includes(letter)).length
  const displayCurrentWord = currentWord
    .split("")
    .map((letter, index) => {
      return (
        <span key={index}>
          {guessLetter.includes(letter) ? letter.toUpperCase() : null}
        </span>
      )
    });

  const langChips = languages.map((lang, index) => {
    const style = {
      backgroundColor: lang.backgroundColor,
      color: lang.color,
    };
    const isLostLang = index < wrongGuessCount;
    const className = clsx("chip", isLostLang && "lost")
    return (
      <span style={style} className={className} key={lang.name}>
        {lang.name}
      </span>
    );
  });
  const isLost = wrongGuessCount >= langChips.length
  const isWon = currentWord.split("").every(letter => guessLetter.includes(letter))

  const keyboard = "abcdefghijklmnopqrstuvwxyz";
  const displayKeyboard = keyboard.split("").map((key) => {
    const isGuess = guessLetter.includes(key)
    const iscorrrect = isGuess && currentWord.includes(key)
    const iswrong = isGuess && !currentWord.includes(key)
    const className = clsx({
      correct: iscorrrect,
      wrong: iswrong,
      disabled: isWon || isLost
    })
    return (
      <button
        onClick={() => addGuessLetter(key)} key={key} className={className}>
        {key.toUpperCase()}
      </button>
    );
  });
  function addGuessLetter(letter) {
    setGuessLetter((prev) => {
      return isWon || isLost ? prev : prev.includes(letter) ? prev : [...prev, letter]
    });
  }

  const gameStatClass = clsx("game-status", {
    won: isWon,
    lost: isLost
  })

  function gameWinningStatus() {
    if (isWon) {
      return (
        <>
          <h2>You Won</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, harum?
          </p>
        </>
      )
    }
    if (isLost) {
      return (
        <>
          <h2>You Lost</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, harum?
          </p>
        </>
      )
    }
  }
  return (
    <main>
      <header>
        <h1>Assembly : EndGame</h1>
        <p>
          Guess the words in under 8 attempts to help the programming world to
          survive.
        </p>
      </header>
      <section className={gameStatClass}>
        {
          gameWinningStatus()
        }
      </section>
      <section className="language-chips">{langChips}</section>
      <section className="word">{displayCurrentWord}</section>
      <section className="keyboard">{displayKeyboard}</section>

      {(isWon || isLost) && <button onClick={window.location.reload}
        className="new-game">New Game</button>}
    </main>
  );
};

export default App;
