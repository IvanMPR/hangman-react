// import GallowsInitialImage from "../assets/images/Hang0.png";
import "./Gallows.css";

export default function Gallows({ misses }) {
  return (
    <div className='gallows'>
      {console.log(misses, "from gallows")}
      <img src={`/images/Hang${misses}.png`} />
    </div>
  );
}
