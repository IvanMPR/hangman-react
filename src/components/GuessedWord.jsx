import "./GuessedWord.css";

export default function GuessedWord({ currentCountryName }) {
  function hideLetters(word) {
    if (word) {
      return word.replace(/[a-zA-Z]/g, "_");
    }
  }
  return (
    <div className='guessed-word-div'>
      <h2 className='guessed-word'>{hideLetters(currentCountryName)}</h2>
    </div>
  );
}
