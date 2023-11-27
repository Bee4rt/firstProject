import "./App.css";

import React from "react";
import Count from "./components/Count";
import Tasklist from "./components/Tasklist";
import TeamProfile from "./components/TeamProfile";
import AddTask from "./components/AddTask";

function App() {
  return (
    <div className="App">
      <Count />
      <AddTask />
      <Tasklist />
      <TeamProfile />
    </div>
  );
}

export default App;
