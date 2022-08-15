import React, { useState } from "react";
import "./App.css";
import tasks from "./list.json";
import TaskCard from "./components/TaskCard";

function App() {
  const [tasksList, setTasksList] = useState(tasks);

  return (
    <div className="container">
      {tasksList.map((task) => {
        return <TaskCard key={task.name} taskData={task} />;
      })}
    </div>
  );
}

export default App;
