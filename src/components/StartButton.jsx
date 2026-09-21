import "./StartButton.css";

export default function StartButton({
  onStart,
  disabled,
  label = "Start Game",
}) {
  return (
    <div className='start-button-div'>
      <button className='start-button' onClick={onStart} disabled={disabled}>
        {label}
      </button>
    </div>
  );
}
