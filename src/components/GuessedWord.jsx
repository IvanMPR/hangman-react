import "./GuessedWord.css";

export default function GuessedWord({
  currentState,
  isTheGamePlayed,
  previousGuesses,
}) {
  function processWord(word) {
    if (word) {
      console.log(word, previousGuesses, "from processWord");
      const parsedWord = word.split("").map(letter => {
        if (letter === " ") return letter;
        if (previousGuesses.includes(letter)) {
          return letter;
        } else return "_";
      });
      return parsedWord.join("");
    }
  }
  const parsedWord = processWord(currentState);
  return (
    <div className='guessed-word-div'>
      <h2 className='guessed-word'>
        {!isTheGamePlayed ? "guess the hidden word" : parsedWord}
      </h2>
    </div>
  );
}
