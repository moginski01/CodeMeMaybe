const TaskDetails = ({ task: task }) => {

    return (
      <div className="workout-details">
        <h4>{task.content}</h4>
        <p><strong>Cost: </strong>{task.koszt}</p>
        <p>{task.data}</p>
      </div>
    )
  }
  
  export default TaskDetails