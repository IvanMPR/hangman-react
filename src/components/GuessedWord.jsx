import "./GuessedWord.css";

export default function GuessedWord({ currentState, isTheGamePlayed }) {
  // const processWord = (word, guessedLetter) => {
  //   word
  //     .trim()
  //     .toUpperCase()
  //     .split("")
  //     .map(currentLetter => {
  //       if (currentLetter === " ") return currentLetter;
  //       if (currentLetter === guessedLetter.toUpperCase()) return currentLetter;
  //       else return '_'
  //     });
  //     const parsedWord = processWord(currentState, guessedLetter)
  // };
  return (
    <div className='guessed-word-div'>
      <h2 className='guessed-word'>
        {!isTheGamePlayed ? "guess the hidden word" : currentState}
      </h2>
    </div>
  );
}
