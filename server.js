const express = require("express");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");

const app = express();
const PORT = 202;
const DATA_FILE = path.join(__dirname, "tasks.json");

app.use(cors());
app.use(express.json());
// Serve frontend
app.use(express.static("public")); 

// Load tasks
const readTasks = () => {
  if (!fs.existsSync(DATA_FILE)) return [];
  const data = fs.readFileSync(DATA_FILE, "utf8");
  return JSON.parse(data || "[]");
};

// Save tasks
const writeTasks = (tasks) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(tasks, null, 2));
};

// Get all tasks
app.get("/tasks", (req, res) => {
  const tasks = readTasks();
  res.json(tasks);
});

// Get task by ID
app.get("/tasks/:id", (req, res) => {
  const tasks = readTasks();
  const task = tasks.find(t => t.task_id === req.params.id);
  if (!task) return res.status(404).json({ error: "Task not found" });
  res.json(task);
});

// Search tasks
app.get("/search", (req, res) => {
  const q = (req.query.q || "").toLowerCase();
  const tasks = readTasks();
  const result = tasks.filter(
    task =>
      task.task_id === q ||
      task.title.toLowerCase().includes(q) ||
      task.description.toLowerCase().includes(q)
  );
  res.json(result);
});

// Create task
app.post("/tasks", (req, res) => {
  const { title, description, status, due_datetime } = req.body;
  const tasks = readTasks();
  const task = {
    task_id: uuidv4(),
    title,
    description,
    status,
    due_datetime
  };
  tasks.push(task);
  writeTasks(tasks);
  res.status(201).json(task);
});

// Update task
app.put("/tasks/:id", (req, res) => {
  const tasks = readTasks();
  const idx = tasks.findIndex(t => t.task_id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: "Task not found" });
  tasks[idx] = { ...tasks[idx], ...req.body };
  writeTasks(tasks);
  res.json(tasks[idx]);
});

// Delete task
app.delete("/tasks/:id", (req, res) => {
  let tasks = readTasks();
  const exists = tasks.some(t => t.task_id === req.params.id);
  if (!exists) return res.status(404).json({ error: "Task not found" });
  tasks = tasks.filter(t => t.task_id !== req.params.id);
  writeTasks(tasks);
  res.json({ message: "Task deleted" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
