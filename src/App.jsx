import Gallows from "./components/Gallows";
import GuessedWord from "./components/GuessedWord";
import UserInputs from "./components/UserInputs";
import StartButton from "./components/StartButton";
import Title from "./components/Title";

import "./App.css";
import { useState } from "react";

function App() {
  const [isGamePlayed, setIsGamePlayed] = useState(false);
  return (
    <>
      <Title />
      <Gallows />
      <GuessedWord />
      {isGamePlayed && <UserInputs />}
      <StartButton
        isGamePlayed={isGamePlayed}
        setIsGamePlayed={setIsGamePlayed}
      />
    </>
  );
}

export default App;
