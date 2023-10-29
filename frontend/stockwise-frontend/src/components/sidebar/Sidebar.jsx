import React, { useState } from "react";
import './Sidebar.css'
import { FaBars, FaUserAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/home",
            name: "Dashboard"
        },
        {
            path: "/categories",
            name: "Product Categories"
        },
        {
            path: "/products",
            name: "Products"
        },
        {
            path: "/vendors",
            name: "Vendors"
        },
        {
            path: "/purchaseorders",
            name: "Purchase Orders"
        },
        {
            path: "/integrations",
            name: "Integrations"
        }

    ];
    return (
        <>
            <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
                <div style={{ margin: isOpen ? "10px 75px" : "10px 15px" }} className="bars">
                    <FaBars onClick={toggle} />
                </div>
                {menuItem.map((item, index) => (
                    <NavLink
                        to={item.path}
                        key={index}
                        className="link"
                        activeclassName="active"
                    >
                        <div
                            style={{ display: isOpen ? "block" : "none" }}
                            className="link_text"
                        >
                            {item.name}
                        </div>
                    </NavLink>
                ))}
            </div>
            <main>{children}</main>
        </>
    );
};

export default Sidebar;
