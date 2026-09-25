import "./StartButton.css";

export default function StartButton({ isGamePlayed, setIsGamePlayed }) {
  function onStart() {
    console.log(isGamePlayed);
    setIsGamePlayed(true);
  }
  return (
    <div className='start-button-div'>
      <button className='start-button' onClick={onStart}>
        {isGamePlayed ? "Restart Game" : "Start Game"}
      </button>
    </div>
  );
}
