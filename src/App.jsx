import { useState } from "react";

import Gallows from "./components/Gallows";
import GuessedWord from "./components/GuessedWord";
import UserInputs from "./components/UserInputs";
import StartButton from "./components/StartButton";
import Title from "./components/Title";
import UiMessages from "./components/UiMessages";

import { hitOrMissSound } from "./utils/sounds";

import "./App.css";

function App() {
  const [states, setStates] = useState([]);
  const [isGamePlayed, setIsGamePlayed] = useState(false);
  const [message, setMessage] = useState("");
  const [currentState, setCurrentState] = useState("");
  const [guessedLetter, setGuessedLetter] = useState("");
  const [previousGuesses, setPreviousGuesses] = useState([]);
  // Derived state
  const misses = currentState
    ? previousGuesses.filter(
        letter => !currentState.toUpperCase().includes(letter),
      ).length
    : 0;

  hitOrMissSound(guessedLetter, currentState);

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
