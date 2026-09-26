import { useRef } from "react";
import "./GuessedWordInput.css";

export default function GuessedWordInput({ setGuessedLetter, setMessage }) {
  const inputRef = useRef(null);

  function clearAndFocusInput() {
    inputRef.current.value = "";
    inputRef.current.focus();
  }

  function onPlacedGuess() {
    setMessage("");
    const value = inputRef.current.value;
    if (!/^[a-z]$/i.test(value)) {
      setMessage("Letters only please !");
      clearAndFocusInput();
      return;
    }
    setGuessedLetter(value);
    clearAndFocusInput();
  }

  return (
    <div className='guessed-word-input-div'>
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
      <button className='guessed-word-button' onClick={onPlacedGuess}>
        Place Guess
      </button>
    </div>
  );
}
