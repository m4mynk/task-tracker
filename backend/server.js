const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const taskRoutes = require("./routes/taskRoutes");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/tasks", taskRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Task Tracker Backend is Running 🚀");
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});