import { Fragment } from "react";

import "./PreviousGuesses.css";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function PreviousGuesses({ previousGuesses }) {
  return (
    <div className='previous-guesses-div'>
      <p className='previous-guesses-title'>Previous Guesses</p>

      <p className='previous-guesses'>
        {ALPHABET.map(letter => (
          <Fragment key={letter}>
            <span className={previousGuesses.includes(letter) ? "guessed" : ""}>
              {letter}
            </span>
            {(letter === "H" || letter === "R") && <br />}
          </Fragment>
        ))}
      </p>
    </div>
  );
}
