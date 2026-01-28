import { useState } from "react";
import { Link } from "react-router-dom";
import API from "../api/axios";

export default function Register({ setPage }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/users/register", form);
    alert("Registered successfully");
    setPage("login");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>

      <input placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />

      <button>Register</button>
      <p>
  Already have account?{" "}
  <span
    onClick={() => setPage("login")}
    style={{
      color: "blue",
      cursor: "pointer",
      textDecoration: "underline",
    }}
  >
    Login
  </span>
</p>

    </form>
  );
}