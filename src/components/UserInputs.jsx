import GuessedWordInput from "./GuessedWordInput";
import PreviousGuesses from "./PreviousGuesses";

import "./UserInputs.css";

export default function UserInputs({ setGuessedLetter, setMessage }) {
  return (
    <div className='user-inputs'>
      <GuessedWordInput
        setGuessedLetter={setGuessedLetter}
        setMessage={setMessage}
      />
      <PreviousGuesses />
    </div>
  );
}
