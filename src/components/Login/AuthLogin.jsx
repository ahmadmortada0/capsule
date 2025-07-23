import axios from "axios";
import React, { useState } from "react";
import { data, Link, useNavigate } from "react-router-dom";
// import usersData from '../../assets/api/users.json'

const AuthLogin = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [authStatus, setAuthStatus] = useState("false");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const match = await axios.post(
        "http://127.0.0.1:8000/api/v0.1/guest/login",
        { email, password }
      );
      console.log(match);
      if (match) {
        localStorage.setItem("isAuth", match.data.payload.token);

        navigate("/home");
      } else {
        setAuthStatus(" Invalid email or password");
      }
    } catch (error) {
      console.error("Login error:", error);

      setAuthStatus(" Something went wrong");
    }
  };

  return (
    <div className="form-section">
      <label htmlFor="uname">
        <b>Email</b>
      </label>

      <input
        type="text"
        placeholder="E.g ahmadmortada@gmail.com"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="psw">
        <b>Password</b>
      </label>

      <input
        type="password"
        placeholder="Enter Password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="button" onClick={handleLogin}>
        Login
      </button>

      {authStatus && <p>{authStatus}</p>}

      <p>
        Don't have an account?{" "}
        <Link to="/signup" className="link">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default AuthLogin;
