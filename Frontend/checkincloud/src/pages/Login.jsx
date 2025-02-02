import React, { useState } from 'react';
import '../styles/LoginForm.css';

const Login = () => {
  const [activeTab, setActiveTab] = useState('login'); // Manage active tab state

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="tabs">
          <button
            className={`tab ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
          <button
            className={`tab ${activeTab === 'signup' ? 'active' : ''}`}
            onClick={() => setActiveTab('signup')}
          >
            Signup
          </button>
        </div>

        {activeTab === 'login' && (
          <div className="tab-content">
            <h2>Login</h2>
            <form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Enter your password" />
              </div>
              <button className="btn-login" type="submit">Login</button>
              <p className="forgot-password">
                <a href="#">Forgot Password?</a>
              </p>
            </form>
          </div>
        )}

        {activeTab === 'signup' && (
          <div className="tab-content">
            <h2>Signup</h2>
            <form>
              <div className="form-group">
                <label htmlFor="signup-email">Email</label>
                <input type="email" id="signup-email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input type="number" id="age" placeholder="Enter your age" />
              </div>
              <div className="form-group">
                <label htmlFor="signup-password">Password</label>
                <input type="password" id="signup-password" placeholder="Enter your password" />
              </div>
              <div className="form-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" placeholder="Confirm your password" />
              </div>
              <button className="btn-signup" type="submit">Signup</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
