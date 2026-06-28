import TaskCard from "./TaskCard";

function TaskList({ tasks, fetchTasks, setEditingTask }) {
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard
          key={task._id}
          task={task}
          fetchTasks={fetchTasks}
          setEditingTask={setEditingTask}
        />
      ))}
    </div>
  );
}

export default TaskList;