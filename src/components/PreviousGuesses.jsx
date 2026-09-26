import "./PreviousGuesses.css";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function PreviousGuesses() {
  return (
    <div className='previous-guesses-div'>
      <p className='previous-guesses-title'>Previous Guesses</p>
      <p className='previous-guesses'>
        {ALPHABET.split("").map(letter => {
          return (
            <span key={letter}>
              {letter}
              {(letter === "H" || letter === "R") && <br />}
            </span>
          );
        })}
      </p>
    </div>
  );
}
