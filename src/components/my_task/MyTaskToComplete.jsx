import React, { useState } from "react";
import { Link } from "react-router-dom";


const submitTask = async (taskID,message) => {

  console.log(taskID)
  console.log(message)
  const user = JSON.parse(localStorage.getItem('user'));
  const email = user.email;
  var mode = "submit_creator"
  const response = await fetch('/api/tasks/my_tasks',{
    method: 'POST',
    headers:{
      Authorization: `Bearer ${user.token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email,mode,taskID,message}),
  })

  const json = await response.json();
}

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
  const [taskSubmission, setTaskSubmission] = useState("");
  const handleAbandonTask = () => {
    abandonTask(task._id);
  }
  const handleTask = () => {
    submitTask(task._id,taskSubmission);
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
      <div>
        <input
          type="text"
          value={taskSubmission}
          onChange={(e) => setTaskSubmission(e.target.value)}
        />
        <button onClick={handleTask}>Submit Task</button>
      </div>
    </div>
  );
};

export default MyTaskToComplete;
