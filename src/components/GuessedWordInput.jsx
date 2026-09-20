import { useRef } from "react";

import "./GuessedWordInput.css";

export default function GuessedWordInput({
  guess,
  setGuess,

  previousGuesses,
  setPreviousGuesses,
}) {
  const inputRef = useRef(null);

  function handleGuess() {
    const letter = guess.trim().toUpperCase();
    if (!letter || previousGuesses.includes(letter)) {
      setGuess("");
      inputRef.current?.focus();
      // create notification that letter has already been used
      alert("You already used that letter");
      return;
    }
    setPreviousGuesses(prev => [...prev, letter]);
    setGuess("");
    inputRef.current?.focus();
  }

  return (
    <div className='guessed-word-input-div'>
      <label htmlFor='guessed-word-input' className='guessed-word-label'>
        Place Guess
      </label>
      <input
        ref={inputRef}
        type='text'
        id='guessed-word-input'
        className='guessed-word-input'
        value={guess}
        onChange={e => setGuess(e.target.value)}
        maxLength={1}
      />
      <button className='guessed-word-button' onClick={handleGuess}>
        Enter
      </button>
    </div>
  );
}
