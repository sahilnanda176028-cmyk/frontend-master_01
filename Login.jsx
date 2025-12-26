import React from "react";
import './Login.css'

const Login = () => {
  return (
    <div className="login-container">
        <div className="login-box">
            <h2 className="login-title">Welcome back</h2>
            <p className="login-subtitle">Login to continue Learning</p>
            
            <form >
            <input type="email" className="login-input" placeholder="Enter Email" />
             <input type="password" className="login-input" placeholder="Enter-Password" />

             <button type="submit" className="login-btn">Login</button>
            </form>
            <p className="login-footer">
                Don't have an account? <span className="signup-link">Sign up</span>
            </p>
        </div>
        
        
        
    </div>
  );
};

export default Login;
