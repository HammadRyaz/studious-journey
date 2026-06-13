import React from "react";
import { languages } from "./languages";
import clsx from "clsx";

const App = () => {
  const [currentWord, setCurrentWord] = React.useState("react");

  const displayCurrentWord = currentWord
    .split("")
    .map((letter) => <span key={letter}>{letter.toUpperCase()}</span>);

  const langChips = languages.map((lang) => {
    const style = {
      backgroundColor: lang.backgroundColor,
      color: lang.color,
    };
    return (
      <span style={style} className={"chip"} key={lang.name}>
        {lang.name}
      </span>
    );
  });
  const keyboard = "abcdefghijklmnopqrstuvwxyz";
  const displayKeyboard = keyboard
    .split("")
    .map((key) => <button key={key}>{key.toUpperCase()}</button>);

  return (
    <main>
      <header>
        <h1>Assembly : EndGame</h1>
        <p>
          Guess the words in under 8 attempts to help the programming world to
          survive.
        </p>
      </header>
      <section className="game-status won">
        <h2>You Won</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, harum?
        </p>
      </section>
      <section className="language-chips">{langChips}</section>
      <section className="word">{displayCurrentWord}</section>
      <section className="keyboard">{displayKeyboard}</section>

      <button className="new-game">New Game</button>
    </main>
  );
};

export default App;
