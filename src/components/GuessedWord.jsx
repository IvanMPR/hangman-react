import "./GuessedWord.css";

export default function GuessedWord({ currentState, isTheGamePlayed }) {
  return (
    <div className='guessed-word-div'>
      <h2 className='guessed-word'>
        {!isTheGamePlayed ? "guess the hidden word" : currentState}
      </h2>
    </div>
  );
}
