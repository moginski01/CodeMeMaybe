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
      <div className="grid grid-cols-4 gap-10">
        <div className="col-span-3 space-y-5">
          {tasks && tasks.map(task => (
            <TaskDetails task={task} key={task._id} />
          ))}
        </div>
      </div>
    )
  }

export default Tasks;
