import Gallows from "./components/Gallows";
import GuessedWord from "./components/GuessedWord";
import UserInputs from "./components/UserInputs";
import StartButton from "./components/StartButton";

import "./App.css";

function App() {
  return (
    <>
      <h1>Hangman Game - React</h1>
      <Gallows />
      <GuessedWord />
      <UserInputs />
      <StartButton />
    </>
  );
}

export default App;
