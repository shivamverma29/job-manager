import React, { useState } from "react";
import "../style/admin-login.css";
import CreateJob from "./CreateJob";
import Particle from "./Particle";

const AdminLogin = () => {
  let u = "test";
  let pass = "qwerty";
  const [showResult, setShowResult] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === u && password === pass) {
      setShowResult(true);
    }
  };

  return (
    <>
      {!showResult ? (
        <div className="login-container">
          <form className="login-form" onSubmit={handleLogin}>
            <h2>Login</h2>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              className="login-input"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              className="login-input"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />

            <button type="submit" className="login-button">
              Login
            </button>
          </form>
          <Particle />
        </div>
      ) : (
        <CreateJob />
      )}
    </>
  );
};

export default AdminLogin;
