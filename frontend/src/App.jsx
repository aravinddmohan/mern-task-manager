import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Tasks from "./pages/Tasks";

function App() {
  const [page, setPage] = useState("register");
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <>
      {!token ? (
        page === "register" ? (
          <Register setPage={setPage} />
        ) : (
          <Login setToken={setToken} setPage={setPage} />
        )
      ) : (
        <Tasks setToken={setToken} />
      )}
    </>
  );
}

export default App;
