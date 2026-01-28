import { useEffect, useState } from "react";
import API from "../api/axios";

export default function Tasks({ setToken }) {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  const fetchTasks = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data);
  };

  const addTask = async () => {
    if (!title) return;
    await API.post("/tasks", { title });
    setTitle("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    fetchTasks();
  };

  const startEdit = (task) => {
    setEditId(task._id);
    setEditTitle(task.title);
  };

  const updateTask = async (id) => {
    await API.put(`/tasks/${id}`, { title: editTitle });
    setEditId(null);
    setEditTitle("");
    fetchTasks();
  };

  const toggleStatus = async (task) => {
    const newStatus =
      task.status === "completed" ? "pending" : "completed";

    await API.put(`/tasks/${task._id}`, {
      status: newStatus,
    });

    fetchTasks();
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <button onClick={logout}>Logout</button>

      <h2>My Tasks</h2>

      <input
        placeholder="New task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {editId === task._id ? (
              <>
                <input
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
                <button onClick={() => updateTask(task._id)}>Save</button>
              </>
            ) : (
              <>
                <span
                  style={{
                    textDecoration:
                      task.status === "completed" ? "line-through" : "none",
                  }}
                >
                  {task.title}
                </span>

                <button onClick={() => toggleStatus(task)}>
                  {task.status === "completed" ? "↩" : "✔"}
                </button>

                <button onClick={() => startEdit(task)}>✏️</button>
                <button onClick={() => deleteTask(task._id)}>❌</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
