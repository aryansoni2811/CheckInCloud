
import React, { useState } from 'react';
import '../styles/LoginForm.css';

const LoginForm = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [registerData, setRegisterData] = useState({
    fullName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login Data:', loginData);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log('Register Data:', registerData);
  };

  return (
    <div className="login-page">
      <div className="form-container">
        <div className="tab-buttons">
          <button 
            className={`tab-button ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
          <button 
            className={`tab-button ${activeTab === 'register' ? 'active' : ''}`}
            onClick={() => setActiveTab('register')}
          >
            Register
          </button>
        </div>

        {activeTab === 'login' ? (
          <div className="form-content">
            <h2>Welcome Back</h2>
            <form onSubmit={handleLoginSubmit}>
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  value={loginData.username}
                  onChange={handleLoginChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  required
                />
              </div>
              <div className="forgot-password">
                <a href="#">Forgot Password?</a>
              </div>
              <button type="submit" className="submit-button">
                Login
              </button>
            </form>
            <div className="divider">
              <span>Or login with</span>
            </div>
            <div className="social-login">
              <button className="social-button google">Google</button>
              <button className="social-button facebook">Facebook</button>
            </div>
          </div>
        ) : (
          <div className="form-content">
            <h2>Create Account</h2>
            <form onSubmit={handleRegisterSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={registerData.fullName}
                  onChange={handleRegisterChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={registerData.email}
                  onChange={handleRegisterChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Choose a username"
                  value={registerData.username}
                  onChange={handleRegisterChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Create a password"
                  value={registerData.password}
                  onChange={handleRegisterChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={registerData.confirmPassword}
                  onChange={handleRegisterChange}
                  required
                />
              </div>
              <button type="submit" className="submit-button">
                Register
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
