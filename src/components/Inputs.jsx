import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Inputs({ tasks, setTasks }) {
  const [newInput, setNewInput] = useState(" ");
  const [newTextarea, setNewTextarea] = useState(" ");

  function addNewTask(e) {
    e.preventDefault();
    const newTask = { id: uuidv4(), task: newInput, description: newTextarea };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    setNewInput("");
    setNewTextarea("");
  }
  return (
    <form>
      <div>
        <label>Title: </label>
        <input value={newInput} onChange={(e) => setNewInput(e.target.value)} />
        <br />
        <label>Description: </label>
        <textarea
          value={newTextarea}
          onChange={(e) => setNewTextarea(e.target.value)}
        ></textarea>
        <button type="submit" onClick={addNewTask}>
          Add Task
        </button>
      </div>
    </form>
  );
}

export default Inputs;
