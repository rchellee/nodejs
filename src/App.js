import "./App.css";
import { useState } from "react";

function App() {
  const [numbr, setNumbr] = useState(1);
  const increaseNumbr = () => {
    setNumbr(numbr + 1);
  };

  const decreaseNumbr = () => {
    setNumbr(numbr - 1);
  };

  const setToZero = () => {
    setNumbr(0);
  };
  return (
    <div className="App">
      <button onClick={increaseNumbr}> Increment </button>
      <button onClick={decreaseNumbr}> Decrement </button>
      <button onClick={setToZero}> Zero </button>
      <h1>{numbr}</h1>
    </div>
  );
}

export default App;
