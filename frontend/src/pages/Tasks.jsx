import { useEffect, useState } from "react";
import API from "../api/axios";

export default function Tasks({ setToken }) {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTasks = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data);
  };

  const addTask = async () => {
    await API.post("/tasks", { title });
    setTitle("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
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

      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((t) => (
          <li key={t._id}>
            {t.title}
            <button onClick={() => deleteTask(t._id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
