import { useState } from "react";
import "./GuessedWordInput.css";

export default function GuessedWordInput() {
  const [input, setInput] = useState("");

  return (
    <div className='guessed-word-input-div'>
      <label htmlFor='guessed-word-input' className='guessed-word-label'>
        Place Guess
      </label>
      <input
        type='text'
        id='guessed-word-input'
        className='guessed-word-input'
        value={input}
        onChange={e => setInput(e.target.value)}
        maxLength={1}
      />
      <button
        className='guessed-word-button'
        onClick={() => console.log(input)}
      >
        Enter
      </button>
    </div>
  );
}
