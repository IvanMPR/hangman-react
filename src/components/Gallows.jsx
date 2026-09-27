import "./Gallows.css";

export default function Gallows({ misses }) {
  return (
    <div className='gallows'>
      <img
        src={`/images/Hang${misses}.png`}
        alt={`Hangman, ${misses} of 10 misses`}
      />
    </div>
  );
}
