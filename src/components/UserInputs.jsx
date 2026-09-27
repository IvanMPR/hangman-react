import GuessedWordInput from "./GuessedWordInput";
import PreviousGuessesContainer from "./PreviousGuessesContainer";

import "./UserInputs.css";

export default function UserInputs({ onGuess, previousGuesses }) {
  return (
    <div className='user-inputs'>
      <GuessedWordInput onGuess={onGuess} />
      <PreviousGuessesContainer previousGuesses={previousGuesses} />
    </div>
  );
}
