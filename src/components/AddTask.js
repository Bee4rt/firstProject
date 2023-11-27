import React, { useState } from "react";

function AddTask() {
  const [taskValue, setTaskValue] = useState("");
  const [progress, setProgress] = useState(false);

  const handleChange = (e) => {
    setTaskValue(e.target.value);
  };
  const handleReset = () => {
    setTaskValue("");
    setProgress(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      id: Math.floor(Math.random() * 10000),
      name: taskValue,
      completed: Boolean(progress),
    };
    console.log(task);
    handleReset();
  };

  return (
    <section className="addtask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Task Name"
          autoComplete="off"
          value={taskValue}
          onChange={handleChange}
        />

        <select onChange={(e) => setProgress(e.target.value)} value={progress}>
          <option value="false">Not completed</option>
          <option value="true">Completed</option>
        </select>
        <span onClick={handleReset} className="reset">
          Reset
        </span>
        <button type="submit">Add Task</button>
      </form>
    </section>
  );
}

export default AddTask;
