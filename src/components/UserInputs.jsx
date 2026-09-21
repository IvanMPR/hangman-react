import GuessedWordInput from "./GuessedWordInput";
import PreviousGuesses from "./PreviousGuesses";

import "./UserInputs.css";

export default function UserInputs({
  guess,
  setGuess,
  setMisses,
  previousGuesses,
  setPreviousGuesses,
  currentCountryName,
}) {
  return (
    <div className='user-inputs'>
      <GuessedWordInput
        guess={guess}
        setGuess={setGuess}
        previousGuesses={previousGuesses}
        setPreviousGuesses={setPreviousGuesses}
        setMisses={setMisses}
        currentCountryName={currentCountryName}
      />
      <PreviousGuesses previousGuesses={previousGuesses} />
    </div>
  );
}
