import GuessedWordInput from "./GuessedWordInput";
import PreviousGuessesContainer from "./PreviousGuessesContainer";

import "./UserInputs.css";

export default function UserInputs({
  setGuessedLetter,
  previousGuesses,
  setPreviousGuesses,
  setMessage,
  currentState,
  setIsGamePlayed,
}) {
  return (
    <div className='user-inputs'>
      <GuessedWordInput
        setGuessedLetter={setGuessedLetter}
        setMessage={setMessage}
        setPreviousGuesses={setPreviousGuesses}
        previousGuesses={previousGuesses}
        currentState={currentState}
        setIsGamePlayed={setIsGamePlayed}
      />
      <PreviousGuessesContainer previousGuesses={previousGuesses} />
    </div>
  );
}
