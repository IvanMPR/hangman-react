import GuessedWordInput from "./GuessedWordInput";
import PreviousGuesses from "./PreviousGuesses";
import UiMessages from "./UiMessages";
import "./UserInputs.css";

export default function UserInputs() {
  return (
    <div className='user-inputs'>
      <UiMessages />
      <div className='user-inputs-wrapper'>
        <GuessedWordInput />
        <PreviousGuesses />
      </div>
    </div>
  );
}
