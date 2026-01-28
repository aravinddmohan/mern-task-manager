import { useState } from "react";
import { Link } from "react-router-dom";
import API from "../api/axios";

export default function Login({ setToken, setPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await API.post("/users/login", { email, password });

    localStorage.setItem("token", res.data.token);
    setToken(res.data.token);
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>

      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

      <button>Login</button>
      <p> New user?{" "}
        <span onClick={() => setPage("register")}
      style={{
      color: "blue",
      cursor: "pointer",
      textDecoration: "underline",
    }}>Register
    </span>
    </p>
    </form>
  );
}
