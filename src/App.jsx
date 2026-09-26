import { useState } from "react";

import Gallows from "./components/Gallows";
import GuessedWord from "./components/GuessedWord";
import UserInputs from "./components/UserInputs";
import StartButton from "./components/StartButton";
import Title from "./components/Title";
import UiMessages from "./components/UiMessages";

import "./App.css";

function App() {
  const [states, setStates] = useState([]);
  const [isGamePlayed, setIsGamePlayed] = useState(false);
  const [message, setMessage] = useState("");
  const [currentState, setCurrentState] = useState("");

  return (
    <>
      <Title />
      <Gallows />
      <GuessedWord currentState={currentState} isTheGamePlayed={isGamePlayed} />
      <UiMessages message={message} />
      {isGamePlayed && <UserInputs setStates={setStates} message={message} />}
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
