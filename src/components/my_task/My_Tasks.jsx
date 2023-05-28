import React from 'react';
import { useEffect, useState } from "react"

import MyTask from './MyTask';
// import '../tasks/tasks.css'

const MyTasks = () => {

    const [tasks, setTasks] = useState(null)
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
        const json = await response.json()
        
        if (response.ok) {
          setTasks(json)
          console.log(json)
          console.log(tasks)
        }
      }
  
      fetchTasks()
    }, [])
  
    return (
      <div className="home">
        <div className="tasks">
          {tasks && tasks.map(task => (
            <MyTask task={task} key={task._id} />
          ))}
        </div>
      </div>
    )
  }


export default MyTasks;