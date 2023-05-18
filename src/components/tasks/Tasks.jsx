import React from 'react';
import { useEffect, useState } from "react"

import TaskDetails from './TaskDetails';
import './tasks.css'

const Tasks = () => {

    const [tasks, setTasks] = useState(null)

    useEffect(() => {
      const fetchTasks = async () => {
        const response = await fetch('/api/tasks')
        const json = await response.json()
  
        if (response.ok) {
          setTasks(json)
          console.log(tasks)
        }
      }
  
      fetchTasks()
    }, [])
  
    return (
      <div className="home">
        <div className="tasks">
          {tasks && tasks.map(task => (
            <TaskDetails task={task} key={task._id} />
          ))}
        </div>
      </div>
    )
  }


export default Tasks;