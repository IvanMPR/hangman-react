import "./UiMessages.css";

export default function UiMessages({ message }) {
  return (
    <p className={`ui-messages ${message ? "" : "hidden"}`}>🖐️ {message}</p>
  );
}
