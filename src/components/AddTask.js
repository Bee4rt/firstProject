import React, { useState } from "react";

function AddTask() {
  const [taskValue, setTaskValue] = useState("");

  const handleChange = (e) => {
    setTaskValue(e.target.value);
  };
  const handleReset = () => {
    setTaskValue("");
  };
  return (
    <section className="addtask">
      <form>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Task Name"
          autoComplete="off"
          value={taskValue}
          onChange={handleChange}
        />
        <button type="submit">Add Task</button>
        <span onClick={handleReset} className="reset">
          Reset
        </span>
      </form>
    </section>
  );
}

export default AddTask;
