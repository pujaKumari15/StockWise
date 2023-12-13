import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const validateFields = () => {
        const usernameRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.com$/;
        if (!username || !password) {
            setError('Both username and password are required');
            return false;
        }
        if (!usernameRegex.test(username)) {
            setError('Username must be in the format abc@abc.com');
            return false;
        }
        setError('');
        return true;
    };

    const handleLogin = () => {
        if (validateFields()) {
            console.log('User:', username, 'Password:', password);
        }
    };

    const handleForgotPassword = () => {
        console.log('Forgot Password button clicked');
        // Add your forgot password logic here
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <div className="input-container">
                <label>Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    placeholder="Enter username"
                />
            </div>
            <div className="input-container">
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Enter password"
                />
            </div>
            {error && <div className="error-message">{error}</div>}
            <button onClick={handleLogin}>Login</button>
            <p className="forgot-password" onClick={handleForgotPassword}>
                Forgot Password?
            </p>
            <div className="Register-link-container">
                <Link to="/Register" className="login-link">New user? Register here</Link>
            </div>
        </div>
    );
};

export default Login;
