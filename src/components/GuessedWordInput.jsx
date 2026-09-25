import "./GuessedWordInput.css";

export default function GuessedWordInput() {
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
      />
      <button className='guessed-word-button'>Enter</button>
    </div>
  );
}
