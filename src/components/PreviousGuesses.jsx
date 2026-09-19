import "./PreviousGuesses.css";

export default function PreviousGuesses() {
  return (
    <div className='previous-guesses-div'>
      <p className='previous-guesses-title'>Previous Guesses</p>
      {/* <div className='previous-guesses'>
        {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(letter => (
          <span key={letter}>{letter}</span>
        ))}
      </div> */}
      <p className='previous-guesses'>
        A B C D E F G H<br />
        I J K L M N O P Q R<br />S T U V W X Y Z
      </p>
    </div>
  );
}
