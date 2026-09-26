import "./PreviousGuessesContainer.css";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function PreviousGuessesContainer({ previousGuesses }) {
  return (
    <div className='previous-guesses-div'>
      <p className='previous-guesses-title'>Previous Guesses</p>
      <p className='previous-guesses'>
        {ALPHABET.split("").map(letter => {
          const isGuessed = previousGuesses.includes(letter);
          return (
            <span key={letter} className={isGuessed ? "guessed" : ""}>
              {letter}
              {(letter === "H" || letter === "R") && <br />}
            </span>
          );
        })}
      </p>
    </div>
  );
}
