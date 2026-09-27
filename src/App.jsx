import { useState } from "react";

import Gallows from "./components/Gallows";
import GuessedWord from "./components/GuessedWord";
import UserInputs from "./components/UserInputs";
import StartButton from "./components/StartButton";
import Title from "./components/Title";
import UiMessages from "./components/UiMessages";

import { playSound, hitOrMissSound } from "./utils/sounds";

import "./App.css";

const MAX_MISSES = 10;

function App() {
  const [states, setStates] = useState([]);
  const [isGamePlayed, setIsGamePlayed] = useState(false);
  const [message, setMessage] = useState("");
  const [currentState, setCurrentState] = useState("");
  const [previousGuesses, setPreviousGuesses] = useState([]);

  const misses = currentState
    ? previousGuesses.filter(
        letter => !currentState.toUpperCase().includes(letter),
      ).length
    : 0;

  function handleGuess(letter) {
    setMessage("");
    const value = letter.toUpperCase();
    if (!/^[a-z]$/i.test(value)) {
      setMessage("Letters only please !");
      return;
    }
    if (previousGuesses.includes(value)) {
      setMessage(`You already tried '${value}!'`);
      return;
    }
    const nextGuesses = [...previousGuesses, value];
    setPreviousGuesses(nextGuesses);

    const word = currentState.toUpperCase();

    const isWon = word
      .split("")
      .every(letter => letter === " " || nextGuesses.includes(letter));

    if (isWon) {
      playSound("win");
      setMessage("You won!🏆 Congratulations!");
      setIsGamePlayed(false);
      return;
    }

    const nextMisses = nextGuesses.filter(
      letter => !word.includes(letter),
    ).length;

    if (nextMisses >= MAX_MISSES) {
      playSound("lost");
      setMessage(`You lost! 💀 The word was '${currentState}'`);
      setIsGamePlayed(false);
      return;
    }

    hitOrMissSound(value, word);
  }

  return (
    <>
      <Title />
      <Gallows misses={misses} />
      <GuessedWord
        currentState={currentState}
        previousGuesses={previousGuesses}
      />
      <UiMessages message={message} />
      {isGamePlayed && (
        <UserInputs onGuess={handleGuess} previousGuesses={previousGuesses} />
      )}
      <StartButton
        isGamePlayed={isGamePlayed}
        setIsGamePlayed={setIsGamePlayed}
        setStates={setStates}
        states={states}
        setMessage={setMessage}
        setCurrentState={setCurrentState}
        setPreviousGuesses={setPreviousGuesses}
      />
    </>
  );
}

export default App;
