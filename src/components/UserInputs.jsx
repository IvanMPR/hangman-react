import GuessedWordInput from "./GuessedWordInput";
import PreviousGuessesContainer from "./PreviousGuessesContainer";

import "./UserInputs.css";

export default function UserInputs({
  setGuessedLetter,
  previousGuesses,
  setPreviousGuesses,
  setMessage,
  currentState,
}) {
  return (
    <div className='user-inputs'>
      <GuessedWordInput
        setGuessedLetter={setGuessedLetter}
        setMessage={setMessage}
        setPreviousGuesses={setPreviousGuesses}
        previousGuesses={previousGuesses}
        currentState={currentState}
      />
      <PreviousGuessesContainer previousGuesses={previousGuesses} />
    </div>
  );
}
