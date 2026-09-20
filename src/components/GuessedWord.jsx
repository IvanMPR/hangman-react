import "./GuessedWord.css";

export default function GuessedWord({
  currentCountryName,
  // setMisses,
  previousGuesses,
}) {
  function hideLetters(word) {
    if (word) {
      const wordToLetters = word.toUpperCase().split("");

      const parsedLetters = wordToLetters.map(letter => {
        if (letter === " ") return " ";
        if (previousGuesses.includes(letter)) {
          // setMisses(prev => prev + 1);
          return letter;
        } else return "_";
      });
      return parsedLetters.join("");
    }
  }
  return (
    <div className='guessed-word-div'>
      <h2 className='guessed-word'>{hideLetters(currentCountryName)}</h2>
    </div>
  );
}
