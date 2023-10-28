import React, { useState } from 'react';
import './Login.css';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Your login logic here (e.g., API call to authenticate user)
        console.log('User:', username, 'Password:', password);
    };

    const handleForgotPassword = () => {
        // Your logic for handling the "Forgot Password?" option
        console.log('Forgot password clicked');
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
            <button onClick={handleLogin}>Login</button>
            <p className="forgot-password" onClick={handleForgotPassword}>
                Forgot Password?
            </p>
        </div>
    );
};

export default Login;

