import { useEffect, useState } from "react";

import Gallows from "./components/Gallows";
import GuessedWord from "./components/GuessedWord";
import UserInputs from "./components/UserInputs";
import StartButton from "./components/StartButton";
import Title from "./components/Title";
import UiMessages from "./components/UiMessages";

import { playSound } from "./utils/sounds";

import "./App.css";

function App() {
  const [states, setStates] = useState([]);
  const [isGamePlayed, setIsGamePlayed] = useState(false);
  const [message, setMessage] = useState("");
  const [currentState, setCurrentState] = useState("");
  const [guessedLetter, setGuessedLetter] = useState("");
  const [previousGuesses, setPreviousGuesses] = useState([]);

  const misses = currentState
    ? previousGuesses.filter(
        letter => !currentState.toUpperCase().includes(letter),
      ).length
    : 0;

  const isWon =
    Boolean(currentState) &&
    currentState
      .toUpperCase()
      .split("")
      .every(letter => letter === " " || previousGuesses.includes(letter));

  useEffect(() => {
    if (isGamePlayed && isWon) {
      setIsGamePlayed(false);
      playSound("win");
      setMessage(`You won! Congratulations`);
    }
  }, [isGamePlayed, isWon]);

  return (
    <>
      <Title />
      <Gallows misses={misses} />
      <GuessedWord
        currentState={currentState}
        previousGuesses={previousGuesses}
        setPreviousGuesses={setPreviousGuesses}
        isTheGamePlayed={isGamePlayed}
        setMessage={setMessage}
      />
      <UiMessages message={message} />
      {isGamePlayed && (
        <UserInputs
          setStates={setStates}
          message={message}
          setGuessedLetter={setGuessedLetter}
          guessedLetter={guessedLetter}
          setMessage={setMessage}
          previousGuesses={previousGuesses}
          setPreviousGuesses={setPreviousGuesses}
          currentState={currentState}
        />
      )}
      <StartButton
        isGamePlayed={isGamePlayed}
        setIsGamePlayed={setIsGamePlayed}
        setStates={setStates}
        states={states}
        setMessage={setMessage}
        setCurrentState={setCurrentState}
      />
    </>
  );
}

export default App;
