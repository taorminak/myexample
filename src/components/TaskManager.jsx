import React, { useState } from "react";
import Inputs from "./Inputs";

const TaskManager = () => {
  const [tasks, setTasks] = useState([
    { id: 1, task: "brush my teeth", description: "4 minutes" },
  ]);
  const [checkedTasks, setCheckedTasks] = useState([]);

  const removeTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  const handleCheck = (id) => {
    if (checkedTasks.includes(id)) {
      setCheckedTasks(checkedTasks.filter((item) => item !== id));
    } else {
      setCheckedTasks([...checkedTasks, id]);
    }
  };

  return (
    <div>
      <h1>Task Manager Example</h1>

      <Inputs tasks={tasks} setTasks={setTasks} />
      <br />

      <ul>
        {tasks.map((item) => {
          return (
            <div key={item.id}>
              <input
                type="checkbox"
                checked={checkedTasks.includes(item.id)}
                onChange={() => handleCheck(item.id)}
              />
              <li task={item.task} description={item.description}>
                {item.task + " " + item.description}
              </li>
              <button onClick={() => removeTask(item.id)}>Delete</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default TaskManager;
