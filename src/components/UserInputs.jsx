import GuessedWordInput from "./GuessedWordInput";
import PreviousGuesses from "./PreviousGuesses";

import "./UserInputs.css";

export default function UserInputs() {
  return (
    <div className='user-inputs'>
      <GuessedWordInput />
      <PreviousGuesses />
    </div>
  );
}
