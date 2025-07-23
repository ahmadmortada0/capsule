import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUpAuth = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conpassword, setConPassword] = useState('');
  const [authStatus, setAuthStatus] = useState('false');

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPassword = (password) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

  const check = async (email, password, confirm) => {
    if (!isValidEmail(email)) {
      setAuthStatus('Invalid email');
      return;
    }

    if (!isValidPassword(password)) {
      setAuthStatus('Password must have 8 characters and a number');
      return;
    }

    if (!email || !username || !password || !confirm) {
      setAuthStatus('Fill all forms');
      return;
    }

    if (password !== confirm) {
      setAuthStatus('Passwords do not match');
      return;
    }

    try {
      const res = await axios.post('http://127.0.0.1:8000/api/v0.1/guest/register', {
        name: username,
        email,
        password,
        password_confirmation: confirm
      });

      const token = res.data.payload.token;
      localStorage.setItem("isAuth", token);

      navigate("/home");
    } catch (error) {
      console.error(error);
      if (error.response?.data?.message) {
        setAuthStatus(error.response.data.message);
      } else {
        setAuthStatus("Registration failed");
      }
    }
  };

  return (
    <div className='form-section'>
      <label><b>User Name</b></label>
      <input type="text" placeholder="E.g AhmadMortada62" value={username} onChange={(e) => setUsername(e.target.value)} required />

      <label><b>Email</b></label>
      <input type="text" placeholder="E.g ahmadmortada@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} required />

      <label><b>Password</b></label>
      <input type="password" placeholder="**********" value={password} onChange={(e) => setPassword(e.target.value)} required />

      <label><b>Confirm Password</b></label>
      <input type="password" placeholder="**********" value={conpassword} onChange={(e) => setConPassword(e.target.value)} required />

      <button type="submit" onClick={() => check(email, password, conpassword)}>Sign in</button>

      {authStatus && <p>{authStatus}</p>}

      <p>Have an account? <Link to="/login" className='link'>Login</Link></p>
    </div>
  );
};

export default SignUpAuth;
