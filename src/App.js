import { useState } from "react";


function App() {
  const [num, setNum] = useState(0)
  const sum1 = () => {
    if (num < 15) setNum(num + 1)
  }

  const min1 = () => {
    if (num > 0) setNum (num - 1)
  }

  const sum5 = () => {
    if (num < 15) setNum(num + 5)
  }

  const min5 = () => {
    if (num > 0) setNum (num - 5)
  }

  return (
    <div>
      <h1>Hello react</h1>
      <h2>{num}</h2>
      <button onClick={sum1}> Plus 1 (+)</button>
      <button onClick={min1}>Minus 1 (-)</button>
      <button onClick={sum5}> sum (+)</button>
      <button onClick={min5}>min (-)</button>
    </div>
  );
}

export default App;
