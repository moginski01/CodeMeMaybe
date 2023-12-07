import React from 'react';
import { useEffect, useState } from "react"

import TaskDetails from './TaskDetails';

const Tasks = () => {

    const [tasks, setTasks] = useState(null)
    const user = JSON.parse(localStorage.getItem('user'));
    const email = user.email;
    
    useEffect(() => {
      const fetchTasks = async () => {
        const response = await fetch('/api/tasks', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${user.token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
        const json = await response.json()
  
        if (response.ok) {
          setTasks(json)
        }
      }
  
      fetchTasks()
    }, [])
  
    return (
      <div className="bg-gray-100 p-4 ml-8 rounded-lg shadow-md my-4 w-7/12">
        <div className="">
          {tasks && tasks.map(task => (
            <TaskDetails task={task} key={task._id} />
          ))}
        </div>
      </div>
    )
  }

export default Tasks;
