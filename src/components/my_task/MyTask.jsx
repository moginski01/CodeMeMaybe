import React, { useState } from "react";
import PayButton from "../PayButton";

const submitTask = async (taskID) => {

  console.log(taskID)
  const user = JSON.parse(localStorage.getItem('user'));
  const email = user.email;
  var mode = "submit_owner"
  const response = await fetch('/api/tasks/my_tasks', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${user.token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, mode, taskID }),
  })

  const json = await response.json();
}


const MyTask = ({ task: task }) => {
  const handleTask = () => {
    submitTask(task._id);
  }

  return (
    <div className="p-3 border-b border-gray-200">
      <h4 className="font-bold text-lg mb-1">{task.content}</h4>
      <p className="text-gray-600"><strong>Cost: </strong>{task.koszt}</p>
      <p className="text-gray-600">{task.data}</p>
      <p className="text-gray-600">Languages: {task.languages.join(', ')}</p>
      <button onClick={handleTask} className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Submit
      </button>
    </div>
  )
};

export default MyTask;
