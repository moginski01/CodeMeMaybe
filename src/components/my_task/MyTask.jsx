import React, { useState } from "react";
import PayButton from "../PayButton";

const submitTask = async (taskID) => {

  console.log(taskID)
  const user = JSON.parse(localStorage.getItem('user'));
  const email = user.email;
  var mode = "submit_owner"
  const response = await fetch('/api/tasks/my_tasks',{
    method: 'POST',
    headers:{
      Authorization: `Bearer ${user.token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email,mode,taskID}),
  })

  const json = await response.json();
}


const MyTask = ({ task: task }) => {
  const handleTask = () => {
    submitTask(task._id);
  }

  return (
    <div className="task-details">
      <h4>{task.content}</h4>
      <p><strong>Cost: </strong>{task.koszt}</p>
      <p>{task.data}</p>
      <p>Languages: {task.languages.join(', ')}</p>
      <span onClick={handleTask}>Submit</span>
      <div><PayButton cartItems={task}></PayButton></div>
    </div>
  )
};

export default MyTask;
