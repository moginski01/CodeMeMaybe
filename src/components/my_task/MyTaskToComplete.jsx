import React, { useState } from "react";
import { Link } from "react-router-dom";

const submitTask = async (taskID, message) => {

  console.log(taskID)
  console.log(message)
  const user = JSON.parse(localStorage.getItem('user'));
  const email = user.email;
  var mode = "submit_creator"
  const response = await fetch('/api/tasks/my_tasks', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${user.token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, mode, taskID, message }),
  })

  const json = await response.json();
}

const abandonTask = async (taskID) => {

  console.log(taskID)
  const user = JSON.parse(localStorage.getItem('user'));
  const email = user.email;
  const response = await fetch('/api/tasks/my_tasks', {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${user.token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, taskID }),
  })
  const json = await response.json();
}

const MyTaskToComplete = ({ task: task }) => {
  const [taskSubmission, setTaskSubmission] = useState("");
  const handleAbandonTask = () => {
    abandonTask(task._id);
  }
  const handleTask = () => {
    submitTask(task._id, taskSubmission);
  }


  return (
    <div className="p-3 border-b border-gray-200">
      <h4 className="font-bold text-lg mb-1">{task.content}</h4>
      <p className="text-gray-600"><strong>Cost: </strong>{task.koszt}</p>
      <p className="text-gray-600">{task.data}</p>
      <p className="text-gray-600">Languages: {task.languages.join(', ')}</p>
      <div className="flex items-center mt-2">
        <input
          type="text"
          value={taskSubmission}
          onChange={(e) => setTaskSubmission(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button onClick={handleTask} className="ml-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Submit Task
        </button>
      </div>
    </div>
  );
};

export default MyTaskToComplete;
