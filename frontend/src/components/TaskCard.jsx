import API from "../services/api";

function TaskCard({ task, fetchTasks, setEditingTask }) {
  const deleteTask = async () => {
    await API.delete(`/${task._id}`);
    fetchTasks();
  };

  return (
    <div className="task-card">
      <h2>{task.title}</h2>

      <p>
        <strong>Description:</strong>{" "}
        {task.description || "No description"}
      </p>

      <p>
        <strong>Priority:</strong> {task.priority}
      </p>

      <p>
        <strong>Status:</strong> {task.status}
      </p>

      <p>
        <strong>Due Date:</strong>{" "}
        {task.dueDate
          ? new Date(task.dueDate).toLocaleDateString()
          : "Not Set"}
      </p>

      <button onClick={() => setEditingTask(task)}>
        Edit
      </button>

      <button
        onClick={deleteTask}
        className="delete-btn"
      >
        Delete
      </button>
    </div>
  );
}

export default TaskCard;