import "./App.css";

import React from "react";
import Count from "./components/Count";
import Tasklist from "./components/Tasklist";

function App() {
  return (
    <div className="App">
      <Count />
      <Tasklist />
    </div>
  );
}

export default App;
