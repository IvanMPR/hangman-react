import { useRef } from "react";
import "./GuessedWordInput.css";

export default function GuessedWordInput({ onGuess }) {
  const inputRef = useRef(null);

  function onPlacedGuess(e) {
    e.preventDefault();
    onGuess(inputRef.current.value);
    inputRef.current.value = "";
    inputRef.current.focus();
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
        autoFocus
      />
      <button type='submit' className='guessed-word-button'>
        Place Guess
      </button>
    </form>
  );
}
