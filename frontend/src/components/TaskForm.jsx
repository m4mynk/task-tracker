import { useEffect, useState } from "react";
import API from "../services/api";

function TaskForm({ fetchTasks, editingTask, setEditingTask }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "Medium",
    status: "Pending",
    dueDate: "",
  });

  useEffect(() => {
    if (editingTask) {
      setFormData({
        title: editingTask.title || "",
        description: editingTask.description || "",
        priority: editingTask.priority || "Medium",
        status: editingTask.status || "Pending",
        dueDate: editingTask.dueDate
          ? editingTask.dueDate.substring(0, 10)
          : "",
      });
    }
  }, [editingTask]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (formData.title.trim().length < 3) {
      alert("Title must be at least 3 characters.");
      return;
    }

    if (editingTask) {
      await API.put(`/${editingTask._id}`, formData);
      setEditingTask(null);
    } else {
      await API.post("/", formData);
    }

    setFormData({
      title: "",
      description: "",
      priority: "Medium",
      status: "Pending",
      dueDate: "",
    });

    fetchTasks();
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="title"
        placeholder="Task Title"
        value={formData.title}
        onChange={handleChange}
      />

      <br /><br />

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />

      <br /><br />

      <select
        name="priority"
        value={formData.priority}
        onChange={handleChange}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <br /><br />

      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
      >
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>

      <br /><br />

      <input
        type="date"
        name="dueDate"
        value={formData.dueDate}
        onChange={handleChange}
      />

      <br /><br />

      <button type="submit">
        {editingTask ? "Update Task" : "Add Task"}
      </button>

      {editingTask && (
        <button
          type="button"
          onClick={() => {
            setEditingTask(null);
            setFormData({
              title: "",
              description: "",
              priority: "Medium",
              status: "Pending",
              dueDate: "",
            });
          }}
          style={{ marginLeft: "10px" }}
        >
          Cancel
        </button>
      )}
    </form>
  );
}

export default TaskForm;