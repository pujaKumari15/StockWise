import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import logo from './assets/logo.svg';
import Products from "./pages/products/Products";
import ProductCategories from "./pages/products/ProductCategories";
import Dashboard from "./pages/dashboard/Dashboard";
import Vendors from "./pages/vendors/Vendors";
import PurchaseOrders from "./pages/purchaseorders/Purchaseorders";
import Reports from "./pages/reports/Reports"



function App() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route exact path = "/" element={<Home/>}/>
                <Route exact path = "/login" element={<Login/>}/>
                <Route exact path = "/register" element={<Register/>}/>
                <Route exact path = "/categories" element={<ProductCategories/>}/>
                <Route exact path = "/products" element={<Products/>}/>
                <Route exact path = "/dashboard" element={<Dashboard/>}/>
                <Route exact path = "/vendors" element={<Vendors/>}/>
                <Route exact path = "/purchaseorders" element={<PurchaseOrders/>}/>
                <Route exact path = "/reports" element={<Reports/>}/>
            </Routes>
        </Router>
    )
}

function Header() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="logo">
                    <img src={logo}  className="logo" alt="logo"/>
                </div>
            </header>
        </div>
    );
}
export default App;