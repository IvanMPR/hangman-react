import { useRef } from "react";
import "./GuessedWordInput.css";
import { hitOrMissSound } from "../utils/sounds";

export default function GuessedWordInput({
  previousGuesses,
  setPreviousGuesses,
  setGuessedLetter,
  setMessage,
  currentState,
}) {
  const inputRef = useRef(null);

  function clearAndFocusInput() {
    inputRef.current.value = "";
    inputRef.current.focus();
  }

  function onPlacedGuess(e) {
    e.preventDefault();
    setMessage("");
    const value = inputRef.current.value.toUpperCase();
    if (!/^[a-z]$/i.test(value)) {
      setMessage("Letters only please !");
      clearAndFocusInput();
      return;
    }
    if (previousGuesses.includes(value)) {
      setMessage(`You already tried '${value}!'`);
      clearAndFocusInput();
      return;
    }
    setGuessedLetter(value);
    setPreviousGuesses(prev => [...prev, value]);
    hitOrMissSound(value, currentState.toUpperCase());
    clearAndFocusInput();
  }

  return (
    <form className='guessed-word-input-div' onSubmit={onPlacedGuess}>
      <label htmlFor='guessed-word-input' className='guessed-word-label'>
        Place Guess
      </label>
      <input
        type='text'
        id='guessed-word-input'
        className='guessed-word-input'
        maxLength={1}
        ref={inputRef}
      />
      <button type='submit' className='guessed-word-button'>
        Place Guess
      </button>
    </form>
  );
}
