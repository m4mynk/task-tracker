import { useEffect, useState } from "react";
import API from "./services/api";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./styles.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const fetchTasks = async () => {
    const res = await API.get("/");
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>
        Task Tracker
      </h1>

      <TaskForm
        fetchTasks={fetchTasks}
        editingTask={editingTask}
        setEditingTask={setEditingTask}
      />

      <hr />

      <TaskList
        tasks={tasks}
        fetchTasks={fetchTasks}
        setEditingTask={setEditingTask}
      />
    </div>
  );
}

export default App;