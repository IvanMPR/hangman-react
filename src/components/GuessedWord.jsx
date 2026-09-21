import { playSound } from "../utils/sounds";
import "./GuessedWord.css";

export default function GuessedWord({ currentCountryName, previousGuesses }) {
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
      if (!parsedWord.includes("_")) {
        playSound("win");
      }
      return parsedWord;
    }
  }

  return (
    <div className='guessed-word-div'>
      <h2 className='guessed-word'>{processWord(currentCountryName)}</h2>
    </div>
  );
}
