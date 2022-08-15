import React from "react";
import { Card, Col, Button } from "antd";

function TaskCard({ taskData, onDelete }) {
  return (
    <Col>
      <Card
        id="card"
        title={taskData.name}
        style={{ width: 400, height: 300, margin: 5 }}
      >
        <div style={{ width: "40%", height: "100%" }}>
          <img
            src={taskData.image}
            alt={`Pic of ${taskData.name}`}
            style={{ width: "95%", height: "100px" }}
          />
          <Button
            id="delete-btn"
            type="primary"
            onClick={() => onDelete(taskData.name)}
          >
            Delete
          </Button>
        </div>
        <div style={{ width: "60%", height: "200px" }}>
          <p>
            <b>Description:</b> {taskData.description}
          </p>
          <p>
            <b>Urgency:</b> {taskData.urgency}
          </p>
          <p>
            <b>Done:</b> {taskData.done ? "Yes" : "No"}
          </p>
          <p>
            <b>Useful link: </b>
            <a href={taskData.useful_link}>Click to access</a>
          </p>
        </div>
      </Card>
    </Col>
  );
}

export default TaskCard;
