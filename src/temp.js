// =============================================================================
// temp.js — JavaScript logic stripped out of the components (reference only).
// Nothing imports this file. Code is grouped by the file it came from.
// =============================================================================

// -----------------------------------------------------------------------------
// App.jsx
// -----------------------------------------------------------------------------

// Imports
import { useState, useEffect } from "react";
import { playSound } from "./utils/sounds";
import { shuffle } from "./utils/shuffle";

// State
const [countries, setCountries] = useState([]);
const [currentCountryName, setCurrentCountryName] = useState(null);
const [guess, setGuess] = useState("");
const [previousGuesses, setPreviousGuesses] = useState([]);
const [isGamePlayed, setIsGamePlayed] = useState(false);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);

// Derived state
const misses = currentCountryName
  ? previousGuesses.filter(
      letter => !currentCountryName.toUpperCase().includes(letter),
    ).length
  : 0;

const isWon =
  Boolean(currentCountryName) &&
  currentCountryName
    .toUpperCase()
    .split("")
    .every(letter => letter === " " || previousGuesses.includes(letter));

// Functions
async function loadCountries() {
  const res = await fetch("http://127.0.0.1:3000/api/v1/states");
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  const data = await res.json();
  const names = data?.data?.states.map(country => country.state);
  if (!Array.isArray(names)) throw new Error("Unexpected payload shape");
  return names;
}

async function startGame() {
  playSound("start");
  setIsLoading(true);
  setError(null);
  try {
    const names = countries.length ? countries : await loadCountries();
    setCountries(names);
    setCurrentCountryName(shuffle([...names])[0]);
    setPreviousGuesses([]);
    setGuess("");
    setIsGamePlayed(true);
  } catch (err) {
    setError(err.message);
  } finally {
    setIsLoading(false);
  }
}

// Effects
useEffect(() => {
  if (isGamePlayed && misses >= 10) {
    alert(`You lost ! :( Hidden state was : ${currentCountryName}`);
    setIsGamePlayed(false);
    playSound("lost");
  }
}, [isGamePlayed, misses, currentCountryName]);

useEffect(() => {
  if (isGamePlayed && isWon) {
    setIsGamePlayed(false);
    playSound("win");
    alert(`You won! The state was: ${currentCountryName}`);
  }
}, [isGamePlayed, isWon, currentCountryName]);

// Original JSX (props + conditional rendering)
/*
  <>
    <h1>Hangman Game - React</h1>
    <Gallows misses={misses} />
    <GuessedWord
      currentCountryName={currentCountryName}
      previousGuesses={previousGuesses}
      isGamePlayed={isGamePlayed}
    />
    {isGamePlayed ? (
      <>
        <UserInputs
          guess={guess}
          setGuess={setGuess}
          previousGuesses={previousGuesses}
          setPreviousGuesses={setPreviousGuesses}
          currentCountryName={currentCountryName}
        />
      </>
    ) : (
      <>
        <StartButton
          onStart={startGame}
          disabled={isLoading}
          label={isLoading ? "Loading..." : "Start Game"}
        />
        {error && <p className='error'>{error}</p>}
      </>
    )}
  </>
*/

// -----------------------------------------------------------------------------
// components/Gallows.jsx
// -----------------------------------------------------------------------------

// Props
// { misses }

// Original JSX
/*
  <img src={`/images/Hang${misses}.png`} />
*/

// -----------------------------------------------------------------------------
// components/GuessedWord.jsx
// -----------------------------------------------------------------------------

// Props
// { isGamePlayed, currentCountryName, previousGuesses }

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

// Original JSX
/*
  <h2 className='guessed-word'>
    {!isGamePlayed
      ? "guess the hidden word"
      : processWord(currentCountryName)}
  </h2>
*/

// -----------------------------------------------------------------------------
// components/GuessedWordInput.jsx
// -----------------------------------------------------------------------------

// Imports
import { useRef } from "react";
// import { playSound } from "../utils/sounds";

// Props
// { guess, setGuess, previousGuesses, setPreviousGuesses, currentCountryName }

// Ref
const inputRef = useRef(null);

// Functions
function displayMessage(message) {
  return <p className='message'>{message}</p>;
}

function handleGuess() {
  const letter = guess.trim().toUpperCase();
  if (!letter || previousGuesses.includes(letter)) {
    displayMessage("You already used that letter");
    setGuess("");
    inputRef.current?.focus();
    return;
  }

  setPreviousGuesses(prev => [...prev, letter]);
  setGuess("");
  inputRef.current?.focus();
  const isHit = currentCountryName.toUpperCase().includes(letter);
  playSound(isHit ? "hit" : "miss");
}

// Original JSX
/*
  <input
    ref={inputRef}
    type='text'
    id='guessed-word-input'
    className='guessed-word-input'
    value={guess}
    onChange={e => setGuess(e.target.value)}
    maxLength={1}
  />
  <button className='guessed-word-button' onClick={handleGuess}>
    Enter
  </button>
*/

// -----------------------------------------------------------------------------
// components/PreviousGuesses.jsx
// -----------------------------------------------------------------------------

// Imports
import { Fragment } from "react";

// Constants
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// Props
// { previousGuesses }

// Original JSX
/*
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
*/

// -----------------------------------------------------------------------------
// components/StartButton.jsx
// -----------------------------------------------------------------------------

// Props
// { onStart, disabled, label = "Start Game" }

// Original JSX
/*
  <button className='start-button' onClick={onStart} disabled={disabled}>
    {label}
  </button>
*/

// -----------------------------------------------------------------------------
// components/UserInputs.jsx
// -----------------------------------------------------------------------------

// Props (setMisses was passed through but never provided by App)
// { guess, setGuess, setMisses, previousGuesses, setPreviousGuesses, currentCountryName }

// Original JSX
/*
  <GuessedWordInput
    guess={guess}
    setGuess={setGuess}
    previousGuesses={previousGuesses}
    setPreviousGuesses={setPreviousGuesses}
    setMisses={setMisses}
    currentCountryName={currentCountryName}
  />
  <PreviousGuesses previousGuesses={previousGuesses} />
*/
