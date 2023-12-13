import React, { useEffect } from 'react';
import './Home.css';
import { Link, useNavigate } from 'react-router-dom';
import { useKeycloak } from "@react-keycloak/web";

const Home = () => {
    const navigate = useNavigate();
    const { keycloak } = useKeycloak();

    const handleLoginClick = () => {
        if (!keycloak.authenticated) {
            keycloak.login({ redirectUri: `${window.location.origin}/dashboard` });
        } else {
            navigate('/dashboard');
        }
    };

    return (
        <div className="home-container">

            <div className="options-container">
                <div className="option-link" onClick={handleLoginClick}>
                    <div className="option">Login (Registered User?)</div>
                </div>
                <Link to="/register" className="option-link">
                    <div className="option">Register (New User?)</div>
                </Link>
            </div>
        </div>
    );
};

export default Home;