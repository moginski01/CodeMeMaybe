import React, { useState } from "react";
import { Link } from "react-router-dom";


const abandonTask = async (taskID) => {

  console.log(taskID)
  const user = JSON.parse(localStorage.getItem('user'));
  const email = user.email;
  const response = await fetch('/api/tasks/my_tasks',{
    method: 'PATCH',
    headers:{
      Authorization: `Bearer ${user.token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email,taskID}),
  })
  const json = await response.json();
}

const MyTaskToComplete = ({ task: task }) => {

  const handleAbandonTask = () => {
    abandonTask(task._id);
  }

  return (
    <div className="task-details">
      <h4>{task.content}</h4>
      <p><strong>Cost: </strong>{task.koszt}</p>
      <p>{task.data}</p>
      <p>Languages: {task.languages.join(', ')}</p>
      <Link to="/tasks/my_tasks">
      <span onClick={handleAbandonTask}>Abandon task</span>
      </Link>
    </div>
  )
};

export default MyTaskToComplete;
