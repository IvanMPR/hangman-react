import "./StartButton.css";

export default function StartButton({
  setStates,
  isGamePlayed,
  setIsGamePlayed,
}) {
  const fetchStates = async () => {
    const response = await fetch("http://localhost:3000/api/v1/states");
    if (!response.ok) throw new Error("Fetching data failed !");
    const data = await response.json();
    const names = data?.data?.states.map(currentState => currentState.state);
    if (!Array.isArray(names)) throw new Error("Unexpected payload shape");
    return names;
  };
  //  setStates(names);
  //   console.log(data.data.states, "from use effect");
  //   console.log(states[0], "from use effect");
  async function onStart() {
    setIsGamePlayed(true);
    try {
      const names = await fetchStates();
      setStates(names);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='start-button-div'>
      <button className='start-button' onClick={onStart}>
        {isGamePlayed ? "Restart Game" : "Start Game"}
      </button>
    </div>
  );
}
