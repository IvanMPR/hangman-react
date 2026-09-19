import { useState, useEffect } from "react";

import Gallows from "./components/Gallows";
import GuessedWord from "./components/GuessedWord";
import UserInputs from "./components/UserInputs";

import { shuffle } from "./utils/shuffle";

import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [currentCountryName, setCurrentCountryName] = useState(null);

  useEffect(() => {
    async function loadCountries() {
      try {
        const res = await fetch("http://127.0.0.1:3000/api/v1/states");

        if (!res.ok) throw new Error(`Request failed: ${res.status}`);

        const data = await res.json();
        const names = data?.data?.states.map(country => country.state);

        if (!Array.isArray(names)) throw new Error("Unexpected payload shape");

        setCountries(names);
        setCurrentCountryName(shuffle([...names])[0]);
      } catch (error) {
        console.log(error);
      }
    }
    loadCountries();
  }, []);

  console.log(countries, currentCountryName);
  return (
    <>
      <h1>Hangman Game - React</h1>
      <Gallows />
      <GuessedWord currentCountryName={currentCountryName} />
      <UserInputs />
    </>
  );
}

export default App;
