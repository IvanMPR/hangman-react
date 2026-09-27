import "./StartButton.css";

import fetchStates from "../utils/api";
import { shuffle } from "../utils/shuffle";
import { playSound } from "../utils/sounds";
import { useState } from "react";

export default function StartButton({
  states,
  setStates,
  isGamePlayed,
  setIsGamePlayed,
  setMessage,
  setCurrentState,
  setPreviousGuesses,
}) {
  const [isLoading, setIsLoading] = useState(false);

  async function onStart() {
    setMessage("");
    setIsLoading(true);
    try {
      const names = states.length ? states : await fetchStates();
      setStates(names);
      setCurrentState(shuffle([...names])[0]);
      setPreviousGuesses([]);
      setIsGamePlayed(true);
      playSound("start");
    } catch (error) {
      console.log(error);
      setMessage(
        error.name === "TimeoutError"
          ? "Server is not responding, try again"
          : error.message,
      );
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className='start-button-div'>
      <button className='start-button' onClick={onStart} disabled={isLoading}>
        {isLoading ? "Loading…" : isGamePlayed ? "Restart Game" : "Start Game"}
      </button>
    </div>
  );
}
