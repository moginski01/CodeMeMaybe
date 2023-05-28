import { Tasks } from "./Tasks"
import { Link } from "react-router-dom";

const asignTask = async (taskID) => {

  console.log(taskID)
  const user = JSON.parse(localStorage.getItem('user'));
  const email = user.email;
  const response = await fetch('/api/tasks', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, taskID}),
  });
  const json = await response.json();
}

const TaskDetails = ({ task}) => {

  const handleAssignTask = () => {
    asignTask(task._id);
  };

    return (
        <div className="task-details">
          <h4>{task.content}</h4>
          <p><strong>Cost: </strong>{task.koszt}</p>
          <p>{task.data}</p>
          <p>Languages: {task.languages.join(', ')}</p>
          <Link to="/tasks/my_tasks">
          <span onClick={handleAssignTask}>Activate Lasers</span>
          </Link>
        </div>
      )
}
  
export default TaskDetails;