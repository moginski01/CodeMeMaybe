import React from 'react';
import { useEffect, useState } from "react"

import MyTask from './MyTask';

const MyTasks = () => {
  const [tasks, setTasks] = useState(null);
  const user = JSON.parse(localStorage.getItem('user'));
  const email = user.email;

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch('/api/tasks/my_tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      // const response = await fetch('/api/tasks')
      const json = await response.json();

      if (response.ok) {
        setTasks(json);
        console.log(json); // Poprawnie ustawione wartości tasks
      }
    }

    fetchTasks();
  }, [])
  
  return (
    <>
      <h2 className="text-2xl font-bold mb-4 ml-4 text-white">
        Delegated tasks
      </h2>
      <div className="tasks bg-gray-100 p-4 ml-8 rounded-lg shadow-md my-4 w-1/2">
        {/* Your code to display delegated tasks */}
        <div className="home">
          <div className="tasks">
            {tasks && tasks.map(task => (
              <MyTask task={task} key={task._id} />
            ))}
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4 ml-4 text-white">
        Tasks to be completed
      </h2>
      <div className="tasks bg-gray-100 p-4 ml-8 rounded-lg shadow-md my-4 w-1/2">
        {/* Your code to display tasks to be completed */}
      </div>
    </>
  );
}

export default MyTasks;