import React, { useState } from "react";
import { Input } from "antd";

export default function NewTask({ newTask }) {
  const [task, setTask] = useState({
    name: "",
    image: "",
    useful_link: "",
    urgency: 1,
    description: "",
    done: false,
  });

  const handleChange = (e) => {
    let parseValue =
      e.target.name === "urgency" ? parseInt(e.target.value) : e.target.value;
    if (e.target.name === "done") {
      parseValue = e.target.checked;
    }
    setTask((prev) => {
      return {
        ...prev,
        [e.target.name]: parseValue,
      };
    });
  };

  const handleForm = (e) => {
    e.preventDefault();
    newTask(task);
    setTask({
      name: "",
      image: "",
      useful_link: "",
      urgency: 1,
      description: "",
      done: false,
    });
  };

  return (
    <form onSubmit={handleForm}>
      <label>Name</label>
      <Input
        value={task.name}
        placeholder="Write a name for the task"
        type="text"
        onChange={(e) => handleChange(e)}
        name="name"
      />
      <label>Image</label>
      <Input
        value={task.image}
        placeholder="http://example.com/task-image.jpg"
        type="text"
        onChange={(e) => handleChange(e)}
        name="image"
      />
      <label>Useful Link</label>
      <Input
        value={task.useful_link}
        placeholder="http://useful-link.com/"
        type="text"
        onChange={(e) => handleChange(e)}
        name="useful_link"
      />
      <label>Urgency</label>
      <Input
        value={task.urgency}
        type="number"
        onChange={(e) => handleChange(e)}
        name="urgency"
      />
      <label>Description</label>
      <Input
        value={task.description}
        placeholder="Write a description"
        type="text"
        onChange={(e) => handleChange(e)}
        name="description"
      />
      <label>Has Done?</label>
      <Input
        checked={task.done}
        type="checkbox"
        onChange={(e) => handleChange(e)}
        name="done"
      />
      <button type="submit">Create</button>
    </form>
  );
}
