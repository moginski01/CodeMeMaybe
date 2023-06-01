import React, { useState } from "react";

const MyTask = ({ task: task }) => {
  return (
    <div className="task-details">
      <h4>{task.content}</h4>
      <p><strong>Cost: </strong>{task.koszt}</p>
      <p>{task.data}</p>
      <p>Languages: {task.languages.join(', ')}</p>
      <span>Submit</span>
    </div>
  )
};

export default MyTask;
