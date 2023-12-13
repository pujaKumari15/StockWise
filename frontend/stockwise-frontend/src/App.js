import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import logo from './assets/logo.svg';
import ProductCategories from "./pages/products/ProductCategories";
import Products from "./pages/products/Products";
import Dashboard from "./pages/dashboard/Dashboard";
import Vendors from "./pages/vendors/Vendors";
import PurchaseOrders from "./pages/purchaseorders/Purchaseorders";
import Reports from "./pages/reports/Reports"
import Alerts from "./pages/alerts/Alerts"
import { useKeycloak } from "@react-keycloak/web";


function App() {
    const { keycloak } = useKeycloak();
    const logout = () => {
        keycloak.logout({ redirectUri: window.location.origin });
    };

    return (
        <Router>
            <Header onLogout={logout} authenticated={keycloak.authenticated} />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/categories" element={<ProtectedRoute><ProductCategories /></ProtectedRoute>} />
                <Route exact path="/products" element={<ProtectedRoute><Products /></ProtectedRoute>} />
                <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                <Route exact path="/vendors" element={<ProtectedRoute><Vendors /></ProtectedRoute>} />
                <Route exact path="/purchaseorders" element={<ProtectedRoute><PurchaseOrders /></ProtectedRoute>} />
                <Route exact path="/reports" element={<ProtectedRoute><Reports/></ProtectedRoute>} />
                <Route exact path="/alerts" element={<ProtectedRoute><Alerts/></ProtectedRoute>} />

                <Route exact path = "/reports" element={<Reports/>}/>
                <Route exact path = "/alerts" element={<Alerts/>}/>
            </Routes>
        </Router>
    );
}

function Header({ onLogout, authenticated }) {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div style={{ flex: 1 }}></div>
                {authenticated && ( // Display the logout button only when authenticated
                    <button className="logout-button" onClick={onLogout}>Logout</button>
                )}
            </header>
        </div>
    );
}

function ProtectedRoute({ children }) {
    const { keycloak, initialized } = useKeycloak();

    // Check if Keycloak instance is initialized
    if (!initialized) {
        return <div>Loading...</div>; // Or any loading indicator
    }

    // Check if the user is authenticated
    if (!keycloak.authenticated) {
        // If not authenticated, initiate the login process
        keycloak.login();
        return <div>Loading...</div>; // Show loading while redirecting for login
    }

    // Render the children components if authenticated
    return children;
}

export default App;
