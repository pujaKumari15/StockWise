import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div className="home-container">
            <h2>Welcome to Our Website!</h2>
            <div className="options-container">
                <Link to="/login" className="option-link">
                    <div className="option">Login (Registered User?)</div>
                </Link>
                <Link to="/register" className="option-link">
                    <div className="option">Register (New User)</div>
                </Link>
            </div>
        </div>
    );
};

export default Home;
