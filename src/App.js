import "./App.css";

import React, { useState } from "react";

function App() {
  //let count = 0;
  const [count, setCount] = useState(0);

  function handelAdd() {
    setCount(count + 1);
  }
  function handelSub() {
    setCount(count - 1);
  }
  return (
    <div className="box">
      <p>{count}</p>
      <button onClick={handelAdd}>ADD</button>
      <button onClick={handelSub}>SUB</button>
    </div>
  );
}

export default App;
