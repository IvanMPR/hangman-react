import Gallows from "./components/Gallows";
import GuessedWord from "./components/GuessedWord";
import UserInputs from "./components/UserInputs";
import StartButton from "./components/StartButton";
import Title from "./components/Title";

import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [states, setStates] = useState([]);
  console.log(states, "from App");
  const [isGamePlayed, setIsGamePlayed] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // const fetchStates = async () => {
    //   const response = await fetch("http://localhost:3000/api/v1/states");
    //   const data = await response.json();
    //   const names = data?.data?.states.map(currentState => currentState.state);
    //   setStates(names);
    //   console.log(data.data.states, "from use effect");
    //   console.log(states[0], "from use effect");
    // };
    // fetchStates();
    console.log(states, "from app");
  }, []);
  // const fetchStates = async () => {
  //   const response = await fetch("http://localhost:3000/api/v1/states");
  //   if (!response.ok) throw new Error(`Request failed: ${response.status}`);
  //   const data = await response.json();
  //   const names = data?.data?.states.map(currentState => currentState.state);
  //   return names;
  // };
  // function startGame() {
  //   setStates(fetchStates);
  //   console.log("game started", states);
  // }

  return (
    <>
      <Title />
      <Gallows />
      <GuessedWord />
      {isGamePlayed && <UserInputs setStates={setStates} />}
      <StartButton
        isGamePlayed={isGamePlayed}
        setIsGamePlayed={setIsGamePlayed}
        setStates={setStates}
      />
    </>
  );
}

export default App;
