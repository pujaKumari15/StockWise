import React from 'react'
import
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
    BsListCheck, BsMenuButtonWideFill, BsFillBellFill}
    from 'react-icons/bs'
import {BiSolidHome, BiSolidShoppingBag} from "react-icons/bi";
import {AiFillAlert} from "react-icons/ai";
import Products from "../products/Products";
import ProductCategories from "../products/ProductCategories";
import Report from "../reports/Reports"
import {Link} from "react-router-dom";

function Sidebar({openSidebarToggle, OpenSidebar}) {
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
            {/*<div className='sidebar-title'>*/}
            {/*    <div className='sidebar-brand'>*/}
            {/*        <BiSolidHome  className='icon_header'/> Home*/}
            {/*    </div>*/}
            {/*    <span className='icon close_icon' onClick={OpenSidebar}>X</span>*/}
            {/*</div>*/}

            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <Link to="/dashboard">
                        <BsGrid1X2Fill className='icon'/> Dashboard
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to='/categories'>
                        <BsFillGrid3X3GapFill className='icon'/> Categories
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/products">
                        <BsFillArchiveFill className='icon'/> Products
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/dashboard">
                        <BsCart3 className='icon'/> Sales
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/purchaseorders">
                        <BiSolidShoppingBag className='icon'/> Purchases
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/vendors">
                        <BsPeopleFill className='icon'/> Vendors
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/reports">
                        <BsMenuButtonWideFill className='icon'/> Reports
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/dashboard">
                        <BsFillBellFill className='icon'/> Alerts
                    </Link>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar