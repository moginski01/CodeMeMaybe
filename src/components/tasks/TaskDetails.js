import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const asignTask = async (taskID) => {

  console.log(taskID)
  const user = JSON.parse(localStorage.getItem('user'));
  const email = user.email;
  const response = await fetch('/api/tasks', {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${user.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, taskID}),
  });
  const json = await response.json();
}

const TaskDetails = ({ task }) => {

  const handleAssignTask = () => {
    asignTask(task._id);
  };

  return (
    // <div className="mx-auto bg-white rounded-lg my-2 px-5 py-3 relative shadow-sm max-w-lg">
    <div className="mx-auto bg-white rounded-lg my-2 px-5 py-3 relative shadow-sm max-w-screen">      <h4 className="mb-2 text-lg text-primary-500">{task.content}</h4>
      <p className="text-sm text-gray-700"><strong>Cost: </strong>{task.koszt}</p>
      <p className="text-sm text-gray-700">{task.data}</p>
      <p className="text-sm text-gray-700">Languages: {task.languages.join(', ')}</p>
      <Link to="/tasks/my_tasks" className="absolute top-5 right-5 mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        <span onClick={handleAssignTask}>Take task</span>
      </Link>
    </div>
  )
}

export default TaskDetails;
