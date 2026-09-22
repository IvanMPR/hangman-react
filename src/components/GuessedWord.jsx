import "./GuessedWord.css";

export default function GuessedWord({
  isGamePlayed,
  currentCountryName,
  previousGuesses,
}) {
  function processWord(word) {
    if (word) {
      const wordToLetters = word.toUpperCase().split("");
      const parsedLetters = wordToLetters.map(letter => {
        if (letter === " ") return " ";
        if (previousGuesses.includes(letter)) {
          return letter;
        } else return "_";
      });
      const parsedWord = parsedLetters.join("");
      return parsedWord;
    }
  }

  return (
    <div className='guessed-word-div'>
      <h2 className='guessed-word'>
        {!isGamePlayed
          ? "guess the hidden word"
          : processWord(currentCountryName)}
      </h2>
    </div>
  );
}
