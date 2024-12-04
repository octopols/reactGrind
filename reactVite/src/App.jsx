import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(10);

  function increaseValue() {
    if (counter < 20) setCounter(counter + 1);
  }

  function decreaseValue() {
    if (counter > 0) setCounter(counter - 1);
  }

  return (
    <>
      <h1>Counter app by Octopols</h1>
      <p>Counter: {counter}</p>
      <button onClick={increaseValue}>Increase</button>
      <button onClick={decreaseValue}>Decrease</button>
    </>
  );
}

export default App;
