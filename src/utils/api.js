export default async function fetchStates() {
  const response = await fetch("http://localhost:3000/api/v1/states");
  if (!response.ok) throw new Error("Fetching data failed !");
  const data = await response.json();
  const names = data?.data?.states.map(currentState => currentState.state);
  if (!Array.isArray(names)) throw new Error("Unexpected payload shape");
  return names;
}
