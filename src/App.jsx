import { useState, useEffect } from "react";

import Gallows from "./components/Gallows";
import GuessedWord from "./components/GuessedWord";
import UserInputs from "./components/UserInputs";
import StartButton from "./components/StartButton";

import { playSound } from "./utils/sounds";
import { shuffle } from "./utils/shuffle";

import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [currentCountryName, setCurrentCountryName] = useState(null);
  const [guess, setGuess] = useState("");
  const [previousGuesses, setPreviousGuesses] = useState([]);
  const [isGamePlayed, setIsGamePlayed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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
  return (
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
  );
}

export default App;
