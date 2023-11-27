import "./App.css";

import React, { useState } from "react";
import Count from "./components/Count";
import Tasklist from "./components/Tasklist";
import TeamProfile from "./components/TeamProfile";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    { id: 123, name: "Learn React Js", completed: true },
    { id: 456, name: "Learn React Native", completed: false },
    { id: 789, name: "Learn Vue Js", completed: false },
  ]);
  return (
    <div className="App">
      <Count />
      <AddTask tasks={tasks} setTasks={setTasks} />
      <Tasklist tasks={tasks} setTasks={setTasks} />
      <TeamProfile />
    </div>
  );
}

export default App;
