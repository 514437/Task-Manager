const API = '/tasks';

    async function loadTasks() {
      const res = await fetch(API);
      const tasks = await res.json();
      displayTasks(tasks);
    }

    function displayTasks(tasks) {
      const list = document.getElementById("taskList");
      list.innerHTML = "";
      tasks.forEach(task => {
        const div = document.createElement("div");
        div.className = "task";
        div.innerHTML = `
          <strong>${task.title}</strong><br>
          ${task.description}<br>
          Status: ${task.status}<br>
          Due: ${new Date(task.due_datetime).toLocaleString()}<br>
          ID: ${task.task_id} 
            <button class="small-btn" onclick="copyTaskId('${task.task_id}')">📋 Copy</button><br>
            <i class="fa-solid fa-copy"></i>
          <div class="actions">
            <button onclick="editTask('${task.task_id}')">Edit</button>
            <button onclick="deleteTask('${task.task_id}')">Delete</button>
          </div>
        `;
        list.appendChild(div);
      });
    }

    async function saveTask() {
      const id = document.getElementById("taskId").value;
      const data = {
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
        status: document.getElementById("status").value,
        due_datetime: document.getElementById("due_datetime").value
      };

      if (id) {
        await fetch(`${API}/${id}`, {
          method: "PUT",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
      } else {
        await fetch(API, {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
      }

      clearForm();
      loadTasks();
    }

    function clearForm() {
      document.getElementById("taskId").value = "";
      document.getElementById("title").value = "";
      document.getElementById("description").value = "";
      document.getElementById("status").value = "Pending";
      document.getElementById("due_datetime").value = "";
    }

    async function editTask(id) {
      const res = await fetch(`${API}/${id}`);
      const task = await res.json();
      document.getElementById("taskId").value = task.task_id;
      document.getElementById("title").value = task.title;
      document.getElementById("description").value = task.description;
      document.getElementById("status").value = task.status;
      document.getElementById("due_datetime").value = task.due_datetime;
    }

    async function deleteTask(id) {
      await fetch(`${API}/${id}`, { method: "DELETE" });
      loadTasks();
    }

    async function searchTasks() {
      const q = document.getElementById("searchQuery").value.trim();
      if (!q) return loadTasks();

      const res = await fetch(`/search?q=${q}`);
      const results = await res.json();
      displayTasks(results);
    }

    function copyTaskId(taskId) {
      navigator.clipboard.writeText(taskId) 
    }

    // Load all tasks on initial load
    window.addEventListener("DOMContentLoaded", () => {
      loadTasks();
    });