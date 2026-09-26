import "./StartButton.css";

import fetchStates from "../utils/api";
import { shuffle } from "../utils/shuffle";

export default function StartButton({
  states,
  setStates,
  isGamePlayed,
  setIsGamePlayed,
  setMessage,
  setCurrentState,
}) {
  async function onStart() {
    try {
      const names = states.length ? states : await fetchStates();
      setStates(names);
      setCurrentState(shuffle([...names])[0]);
      setIsGamePlayed(true);
    } catch (error) {
      console.log(error);
      setMessage(error.message);
    }
  }
  return (
    <div className='start-button-div'>
      <button className='start-button' onClick={onStart}>
        {isGamePlayed ? "Restart Game" : "Start Game"}
      </button>
    </div>
  );
}
