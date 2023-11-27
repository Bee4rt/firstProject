import React, { useState } from "react";
import TaskCard from "./TaskCard";
import CardBox from "./CardBox";

function Tasklist() {
  const [tasks, setTasks] = useState([
    { id: 123, name: "Learn React Js", completed: true },
    { id: 456, name: "Learn React Native", completed: false },
    { id: 789, name: "Learn Vue Js", completed: false },
  ]);

  const [show, setShow] = useState(true);

  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  return (
    <>
      <ul>
        <h1 className="Title">Task List</h1>
        <button className="trigger" onClick={() => setShow(!show)}>
          Toggle
        </button>
        {show &&
          tasks.map((task) => (
            <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
          ))}
      </ul>
      <CardBox result="success">
        <p className="title">your code is running successfully</p>
        <p className="description">
          Download the React DevTools for a better development experience
        </p>
      </CardBox>
      <CardBox result="warning">
        <p className="title">Uncaught ReferenceError</p>
        <p className="description">
          The above error occurred in the Tasklist component
        </p>
      </CardBox>
      <CardBox result="alert">
        <p className="title">error 404</p>
        <p className="description">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </CardBox>
    </>
  );
}

export default Tasklist;
