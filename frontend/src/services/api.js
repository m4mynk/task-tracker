import axios from "axios";

const API = axios.create({
  baseURL: "https://task-tracker-backend-dww8.onrender.com/api/tasks",
});

export default API;