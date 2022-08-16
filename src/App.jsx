import React, { useState } from "react";
import "./App.css";
import tasks from "./list.json";
import TaskCard from "./components/TaskCard";
import SearchBar from "./components/SearchBar";
import NewTask from "./components/NewTask";

function App() {
  const [tasksList, setTasksList] = useState(tasks);
  const [tasksCurrentTotalRem, setCurrentTotal] = useState(tasks);

  const handleDelete = (taskToDelete) => {
    const remaining = tasksList.filter((elem) => elem.name !== taskToDelete);
    setTasksList(remaining);
    /* Added state to not lost the delete item when reset the search bar list */
    setCurrentTotal(remaining);
  };

  const handleSearch = (searchValue) => {
    if (searchValue === "") {
      setTasksList(tasksCurrentTotalRem);
    } else {
      const filtered = tasksCurrentTotalRem.filter((elem) =>
        elem.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setTasksList(filtered);
    }
  };

  const handleNewTask = (task) => {
    const updatedTasks = [...tasksList];
    updatedTasks.unshift(task);
    setTasksList(updatedTasks);
    /* Added state to not lost the added item when reset the search bar list */
    setCurrentTotal(updatedTasks);
  };

  const handleUrgency = () => {
    const ordered = [...tasksList].sort((a, b) => b.urgency - a.urgency);
    setTasksList(ordered);
  };

  return (
    <div className="mainApp">
      <h1>TO DO LIST APP</h1>
      <div id="top-container">
        <SearchBar onSearch={handleSearch} />
        <NewTask newTask={handleNewTask} />
      </div>
      <button onClick={handleUrgency} id="order-btn">
        Sort by Urgency
      </button>
      <div className="container">
        {tasksList.map((task) => {
          return (
            <TaskCard key={task.name} taskData={task} onDelete={handleDelete} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
