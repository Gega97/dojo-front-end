import React, { useState } from "react";
import "./App.css";

const App = (props) => {
  const [color, setColor] = useState("Amarillo");
  const [count, setCount] = useState(0);

  const sumCount = () => {
    setCount(count + 1);
  };

  let content = (
    <div className="App">
      {color}
      <button onClick={() => setColor("Amarillo")}>Amarillo</button>
      <button onClick={() => setColor("Azul")}>Azul</button>
      <br />
      <button onClick={sumCount}>Sumar 1</button>
      {count}
    </div>
  );
  return content;
};
export default App;
