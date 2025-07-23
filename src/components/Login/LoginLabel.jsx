// src/components/LoginLabel.jsx
import React from 'react';
import AuthLogin from './AuthLogin';
import logo from '../../assets/images/logo.png';
import login from '../../assets/images/login.jpg';

const LoginLabel = () => {
 
  return (
 
   <div>
 
      <header>
 
        <img src={logo} alt="Logo" />
 
      </header>
 
      <div className='container flex'>
 
        <div className='login-section'>
 
          <div className='greeting-section'>
 
            <h1>Welcome Back</h1>
 
            <p>Login to continue</p>
 
          </div>

          <AuthLogin />

        </div>

        <div className='image-section'>

          <img src={login} alt="Login" />

        </div>

      </div>

    </div>
  );
};

export default LoginLabel;
