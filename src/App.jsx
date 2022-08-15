import React, { useState } from "react";
import "./App.css";
import tasks from "./list.json";
import TaskCard from "./components/TaskCard";

function App() {
  const [tasksList, setTasksList] = useState(tasks);

  const handleDelete = (taskToDelete) => {
    const remaining = tasksList.filter((elem) => elem.name !== taskToDelete);
    setTasksList(remaining);
  };

  return (
    <div className="container">
      {tasksList.map((task) => {
        return (
          <TaskCard key={task.name} taskData={task} onDelete={handleDelete} />
        );
      })}
    </div>
  );
}

export default App;
